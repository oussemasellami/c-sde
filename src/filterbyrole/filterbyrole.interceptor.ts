import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class FilterbyroleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request=context.switchToHttp().getRequest()
    const userrole=request.headers?.role
    console.log("role user :",userrole)
    
    return next.handle().pipe(
      map((data)=>{

        const filteruser=(user:any)=>{
        if(userrole=="admin" && user.role=="admin"){
          
          return{
            username:user.username,
            //email:data.email,
            status:user.satatus,
            role:user.role
          }
        }else if(userrole =="client" && user.role=="client"){
          return {
            username:user.username,
            role:user.role
          }
         // return user
        }
      }
      if(Array.isArray(data)){
        return data.map(o=>filteruser(o)).filter(o=>o!=undefined)
      }else{
        return filteruser(data)
      }

      })
    );
  }
}
