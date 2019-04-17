import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user.entity';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  _user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUser(id:number): void {
    this.userService.getUser(id)
      .subscribe(user => this._user = user);
  }

}