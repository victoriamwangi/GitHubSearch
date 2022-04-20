import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationBtnsComponent } from './navigation-btns/navigation-btns.component';
import { Repository } from './repository';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  {path: 'user-search', component: UserSearchComponent},
  {path: 'navigation-btns', component: NavigationBtnsComponent },
{path: 'repository', component: RepositoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
