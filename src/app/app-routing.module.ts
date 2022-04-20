import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  {path: 'user-search', component: UserSearchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
