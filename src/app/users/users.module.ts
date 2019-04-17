import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './user-resolver';
import { Ng2SmartTableModule } from 'ngx-smart-table';
import { UserlistRowRenderComponent } from './userlist/userlistrowrender.component';

const userroutes: Routes = [
  { path: '', component: UsersComponent,
    children: [
      { path: 'userlist', component: UserlistComponent, resolve: { users: UserResolver } },
      { path: 'userdetails/:id', component: UserdetailsComponent },
      { path: '', redirectTo: '/userlist', pathMatch:'full'}]
  }
]

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(userroutes)
  ],
  declarations: [
    UsersComponent, 
    UserlistRowRenderComponent,
    UserlistComponent, 
    UserdetailsComponent    
    ],    
    providers: [UserResolver],
    entryComponents: [UserlistRowRenderComponent]
})
export class UsersModule { }