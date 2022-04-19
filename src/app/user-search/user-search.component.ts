import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-search.service';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
