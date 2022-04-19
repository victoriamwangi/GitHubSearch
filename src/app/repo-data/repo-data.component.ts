import { Component, OnInit } from '@angular/core';
import { UserService } from '../userhttp/user.service';
import { User } from '../user';

@Component({
  selector: 'app-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.css']
})
export class RepoDataComponent implements OnInit {
user!: User;
repositoriesInfor: any = [];
userhttp! : UserService;
  constructor(userhttp: UserService) {
this.userhttp = userhttp;
  }

  ngOnInit(): void  {
    this.user = this.userhttp.user;
    this.repositoriesInfor = this.userhttp.repositories;

  }

}
