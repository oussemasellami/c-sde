import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user/user.model';
import { ChatGateway } from './users/chat/chat.gateway';
//socket
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/chat',
    }),

    TypeOrmModule.forRoot({
      host: 'localhost',
      type: 'mongodb',
      port: 27017,
      database: '2cinfosdedb',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
