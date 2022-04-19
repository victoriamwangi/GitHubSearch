import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../userhttp/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!: User;
userhttp!: UserService;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userRequest();
    this.user = this.userService.user;
  }

}
