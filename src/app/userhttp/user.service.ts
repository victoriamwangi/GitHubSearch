import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
user: User;

  constructor(private http :HttpClient) {
    this.user = new User ("","","");
   }

   userRequest(){
     interface ApiResponse{
       name: string;
       avatar_url: string;
       url: string;
     }
     let promise = new Promise((resolve, reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response =>{
         this.user.avatar_url = response!.avatar_url;
         this.user.login= response!.name;
         this.user.url = response!.url;
         resolve("")

       },
       error=>{
         this.user.avatar_url = "Avatar";
         this.user.login = "Victoria";
         this.user.url = "hehe";

         reject(error)
       })

     })
     return promise
   }
}
