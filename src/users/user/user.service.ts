import { Injectable } from '@nestjs/common';
import { MongoRepository, ObjectId } from 'typeorm';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository:MongoRepository<User>){}

    create(data:User){
        return this.userRepository.save(data)
    }

    getallusers(){
        return this.userRepository.find()
    }

    getoneuser(id:ObjectId){
        return this.userRepository.findOneBy(id)
    }
    updateuser(id:ObjectId,data:User){
        return this.userRepository.update(id,data)
    }

      deleteuser(id:ObjectId){
        return this.userRepository.delete(id)
    }
}
