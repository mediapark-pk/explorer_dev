import uuidv4 from 'uuid/v4';

export enum MessageType {
    REQUEST = 1,
    RESPONSE = 2,
    EVENT = 3,
}

export type ResponseBody<T> = {
    success: boolean;
    errors: any;
    data: T;
};

export class Message {

    public code: string;

    public headers: {
        id: string;
        type: MessageType;
        token?: string;
    };
    public body: any;

    constructor(type: MessageType, code: string, body: any, id?: string) {
        this.code = code;
        this.headers = {
            id: id || uuidv4(),
            type,
        };
        this.body = body;
    }
}
