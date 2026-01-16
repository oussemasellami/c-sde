import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { ObjectId } from 'typeorm';
import { createuserdto } from './creteuser.dto';
import { FilterbyroleInterceptor } from 'src/filterbyrole/filterbyrole.interceptor';

//@UseInterceptors(FilterbyroleInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  createuser(@Body() data: createuserdto) {
    return this.userService.create(data);
  }

  @Get('showuser')
  getalluser() {
    return this.userService.getallusers();
  }

  @Get('getdatesixMonth')
  getdatesixMonth() {
    //return this.userService.getsixmois()
    return this.userService.getdays();
  }

  @Get('showuserbyrole/:role')
  getbyrole(@Param('role') role: string) {
    return this.userService.getbyrole(role);
  }

  @Get('showuser/:id')
  getoneuser(@Param('id') id: ObjectId) {
    return this.userService.getoneuser(id);
  }

  @Put('updateuser/:id')
  updateuser(@Param('id') id: ObjectId, @Body() data: User) {
    return this.userService.updateuser(id, data);
  }

  @Delete('deleteuser/:id')
  deleteuser(@Param('id') id: ObjectId) {
    return this.userService.deleteuser(id);
  }

  //ghofrane oualhazi:+5
  @Get('showpaginator/:page/:limit')
  getpaginator(
    @Param('page', ParseIntPipe) page: any,
    @Param('limit', ParseIntPipe) limit: any,
  ) {
    return this.userService.getPaginatorsUsers(page, limit);
  }

  @Get('getTri')
  gettri() {
    //return this.userService.getsixmois()
    return this.userService.gettriUsers();
  }

  @Get('getdesact')
  getdesact() {
    //return this.userService.getsixmois()
    return this.userService.Desactivate();
  }

  @Get('updateRole/:domain/:myrole')
  updateRole(@Param('domain') domain: any, @Param('myrole') myrole: any) {
    return this.userService.updateRole(domain, myrole);
  }
}
