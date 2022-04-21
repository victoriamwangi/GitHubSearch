import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../user-search.service';
import { SafePipePipe } from '../pipe/safe-pipe.pipe';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
user!: User;
repositoryDetails: any = [];
userSearchService!: UserService;
hideInput!: boolean;
//   public showInput =true;
//   public showInfor = false;

//   showUserInput(hideInput: any){
//   this.showInput = hideInput;
//   this.showInfor = false;
// }

  constructor( userSearchService: UserService) {
    this.userSearchService = this.userSearchService;
  }
  @Output() toggleBack = new EventEmitter();
  goBack(){
    this.hideInput = true;
    this.toggleBack.emit(this.hideInput);
  }

  ngOnInit(): void {
    this.userSearchService.user;
    this.user = this.userSearchService.user;
    this.repositoryDetails = this.userSearchService.repositoriesInfor;
  }
}
