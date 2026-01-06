import { Injectable } from '@nestjs/common';
import { MongoRepository, ObjectId } from 'typeorm';
import { User } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { createuserdto } from './creteuser.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository:MongoRepository<User>){}

    async create(data:createuserdto):Promise<string>{
        try{
           
             await this.userRepository.save(data)

         return 'user created'
            
        }catch(err){
            return 'err user not created'
            //console.log(err)
        }
        
    }

    async getallusers():Promise<User[] >{
           try{
            const user=await this.userRepository.find()
             return user
        }catch(err){
return []
        }
        
    }

    async getoneuser(id:ObjectId):Promise<User|null>{
           try{
                 const user=await this.userRepository.findOneBy(id)
                  return user
        }catch(err){
            return null
 //console.log(err)
        }
   
    }
    async updateuser(id:ObjectId,data:User):Promise<string>{
           try{
              await this.userRepository.update(id,data)
              return 'user updated'
        }catch(err){
return 'err'
 //console.log(err)
        }
       
    }

      async deleteuser(id:ObjectId):Promise<string>{
           try{
             await this.userRepository.delete(id)
              return 'user deleted'
        }catch(err){
             return 'err'
 console.log(err)
        }
       
    }
}
