import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationBtnsComponent } from './navigation-btns/navigation-btns.component';
import { Repository } from './repository';
import { RepositoryComponent } from './repository/repository.component';
import { SearchFormComponent } from './search-form/search-form.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  {path: 'user-search', component: UserSearchComponent},
  {path: 'navigation-btns', component: NavigationBtnsComponent },
{path: 'repository', component: RepositoryComponent },
{path: 'search-form', component: SearchFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
