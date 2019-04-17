import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user.entity';
import { UserlistRowRenderComponent } from './userlistrowrender.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

 _users:User[];

  settings = {
    actions: false,
    columns: {      
      username: { title: 'User Name', type: 'custom',
        renderComponent: UserlistRowRenderComponent },
      name: { title: 'Full Name' },      
      email: { title: 'Email' }
    }
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._users = this.route.snapshot.data.users;
    console.log("this._users:",this._users);
    console.log("load data before component is loaded");
  }
}