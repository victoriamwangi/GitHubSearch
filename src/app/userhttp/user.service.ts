import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';



@Injectable({
  providedIn: 'root'
})
export class UserService {
user: User;
repo!: Repository;
repositories:any = [];
newUsersInfor:any = [];

  constructor(private http :HttpClient) {
    this.user = new User ("","","", "");
    this.repo = new Repository("", "", "","", "");
   }

   userRequest(){
     interface ApiResponse{
       login: string;
       avatar_url: string;
       html_url: string;
       name: string;
       following: number;
       followers: number;
       repos_url: Repository[];
       created_at: string;

     }
     let promise = new Promise((resolve, reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response =>{
         this.user.avatar_url = response!.avatar_url;
         this.user.login= response!.login;
         this.user.url = response!.html_url;
         this.user.name = response!.name;
         this.user.followers = response!.followers;
         this.user.following = response!.following;
         this.user.created_at = response!.created_at;

         resolve("")
       },
       error=>{
         this.user.avatar_url = "Avatar";
         this.user.login = "Victoria";
         this.user.url = "hehe";

         reject(error)
       })
       this.http.get<any>(environment.reposUrl).toPromise().then(response =>{
         for(var i=0; i<response.length; i++){
           this.newUsersInfor = new Repository(response[i].name, response[i].url, response[i].html_url, response[i].description, response[i].created_at)
           this.repositories.push(this.newUsersInfor)
         }
         resolve("")
       },
       error=>{
         reject(error)
       }
       )

     })
     return promise
   }
}
