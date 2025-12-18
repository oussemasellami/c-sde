import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './users/user/user.model';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      host:'localhost',
      type:'mongodb',
      port:27017,
       database:'2cinfosdedb',
      entities:[User],
      synchronize:true


    })
    ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
