import {IsEmail, IsNotEmpty, IsString, Matches} from 'class-validator'

export class createuserdto{

@IsString()
@IsNotEmpty({message:'username not found'})
username:string

@IsString()
@IsNotEmpty()

@Matches(/@esprit.tn$/)
email:string

@IsString()
@IsNotEmpty()
status:string


}