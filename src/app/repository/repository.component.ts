import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-search.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
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
