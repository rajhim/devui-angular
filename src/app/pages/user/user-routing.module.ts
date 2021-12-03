import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserNewComponent} from "./user-new/user-new.component";

const routes: Routes = [
  {
    path: 'list', component: UserListComponent,
    data: {
      title: 'List ',
      header: "User"
    }
  },
  {path: 'new', component: UserNewComponent,
    data: {
      title: 'New ',
      header: "User"
    }},
  {path: 'edit/:id', component: UserNewComponent,
    data: {
      title: 'Edit ',
      header: "User"
    }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
