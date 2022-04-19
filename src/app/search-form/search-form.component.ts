import { Component, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user!: User;
  userName!: string;
  userhttp: UserService;

  searchUser(){
    this.userhttp.userRequest(this.userName);
    

  }

  constructor(userhttp: UserService) {
    this.userhttp = userhttp;
  }

  ngOnInit(): void {
  }

}
