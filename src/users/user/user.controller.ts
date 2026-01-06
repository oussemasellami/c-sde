import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { ObjectId } from 'typeorm';
import { createuserdto } from './creteuser.dto';
import { FilterbyroleInterceptor } from 'src/filterbyrole/filterbyrole.interceptor';

@UseInterceptors(FilterbyroleInterceptor)
@Controller('user')
export class UserController {
constructor(private readonly userService:UserService){}

@Post("add")
createuser(@Body() data:createuserdto){
    return this.userService.create(data)
}

@Get("showuser")
getalluser(){
    return this.userService.getallusers()
}

@Get("showuser/:id")
getoneuser(@Param('id') id:ObjectId){
    return this.userService.getoneuser(id)
}

@Put("updateuser/:id")
updateuser(@Param('id')id:ObjectId,@Body() data:User){
    return this.userService.updateuser(id,data)
}

@Delete("deleteuser/:id")
deleteuser(@Param('id')id:ObjectId){
    return this.userService.deleteuser(id)
}


}
