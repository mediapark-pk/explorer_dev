import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from 'src/module/app.module';
import { ValidationSocketPipe } from '@app/socket-nest';

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationSocketPipe());
    app.useWebSocketAdapter(new WsAdapter(app));
    await app.listen(3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
