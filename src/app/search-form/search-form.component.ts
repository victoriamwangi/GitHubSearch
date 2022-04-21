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
  userSearchService: UserService;
  public showInput =true;
  public showInfor = false;

  searchUser(){
    this.userSearchService.userRequest(this.userName);
    this.showInput = false;
    this.showInfor = true;
  }
showUserInput(hideInput: any){
  this.showInput = hideInput;
  this.showInfor = false;
}
   constructor( userSearchService: UserService) {
     this.userSearchService = userSearchService;
    }


    ngOnInit() {

  }

}
