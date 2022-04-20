import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-search.service';

@Component({
  selector: 'app-navigation-btns',
  templateUrl: './navigation-btns.component.html',
  styleUrls: ['./navigation-btns.component.css']
})
export class NavigationBtnsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
