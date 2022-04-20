import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../userhttp/user.service';
import { SafePipePipe } from '../pipe/safe-pipe.pipe';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
user!: User;
userhttp!: UserService;
  public showInput =true;
  public showInfor = false;

  showUserInput(hideInput: any){
  this.showInput = hideInput;
  this.showInfor = false;
}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userRequest();
    this.user = this.userService.user;
  }
}
