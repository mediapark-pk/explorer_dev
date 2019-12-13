import io from 'socket.io-client';
import { Observable } from 'rxjs';

import { Message, MessageType } from 'src/core/api/socket/message';
import { MESSAGE_CHANNEL, CONNECT_CHANNEL } from 'src/core/api/socket/channels';
import { CONSTANTS } from 'src/configs';
import { singleton } from 'src/container';
import SocketIOClient from 'socket.io-client';

interface ISocketConfig {
    host: string;
    protocol: string;
    port: number;
}

const defaultConfig = {
    host: CONSTANTS.SOCKET.HOST,
    protocol: CONSTANTS.SOCKET.PROTOCOL,
    port: CONSTANTS.SOCKET.PORT,
}

@singleton
class Socket {

    public readonly host: string;

    private readonly protocol: string;

    private readonly port: number;

    private queue: Array<Message>;

    private requests: Map<string, { resolve: Function, reject: Function }>;

    private isConnect = false;

    private ws: SocketIOClient.Socket;

    constructor(config: ISocketConfig = defaultConfig) {
        this.host = config.host;
        this.protocol = config.protocol;
        this.port = config.port;

        this.queue = [];
        this.requests = new Map();

        this.init();
    }

    init() {
        console.log('============ BACKEND URL:', `${this.host}`, '============');

        this.ws = io(`${this.protocol}://${this.host}:${this.port}`, {
            transports: ['websocket']
        });

        this.ws.on(CONNECT_CHANNEL, () => {
            console.log('WS:CONNECT');
            this.isConnect = true;
            this.queue.forEach(message => {
                this.ws.emit('message', message);
            });
        });

        this.ws.on(MESSAGE_CHANNEL, this.onMessage);
    }

    onMessage = (response: Message) => {
        const { code, headers, body } = response;
        console.log('WS:API_RESPONSE =>', response);

        try {
            if (code) {
                const request = this.requests.get(headers.id);
                if (request) {
                    body.success
                        ? request.resolve(body.data)
                        : request.reject(body.errors);

                    this.requests.delete(headers.id);
                }
            }
        } catch (e) {
            console.error('WS:MESSAGE_PARSE_ERROR', body);
            console.error(e);
        }
    }

    getMessage<T>(code: string): Observable<T> {
        return new Observable(observer => {

            const onMessage = (response: Message) => {
                if (code === response.code) {
                    try {
                        observer.next(response.body);
                    } catch (e) {
                        observer.error(response.body);
                        console.error(e);
                    }
                }
            };

            this.ws.on(MESSAGE_CHANNEL, onMessage);

            return () => this.ws.off(MESSAGE_CHANNEL, onMessage);
        });
    }

    emit<T>(code: string, data: any = ''): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const message = new Message(MessageType.REQUEST, code, data);
            console.log('---[socket message]---', message);

            if (this.isConnect) {
                this.ws.emit('message', message);
            } else {
                this.queue.push(message);
            }

            this.requests.set(message.headers.id, { resolve, reject });
        });
    }

    close() {
        this.ws.close();
    }
}

export default Socket;
