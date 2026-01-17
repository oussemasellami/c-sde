import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import {Server} from 'socket.io'

@WebSocketGateway()
export class ChatGateway {
    @WebSocketServer()
    server:Server

  @SubscribeMessage('msgsend')
  handleMessage(@MessageBody() msg:any) {
    console.log('message server :',msg)
     this.server.emit('messagerecu',msg)
  }
}
