import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user.entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  _user:User;

  constructor(
   private userService: UserService,
   private route: ActivatedRoute
  ) { 

  }

  ngOnInit() {    
    this.route.paramMap
        .subscribe(params => {
        this.getUserDetails(+params.get('id'));
    });
  }

  getUserDetails(id:number)
  {
    this.userService.getUser(id)
      .subscribe(user => this._user = user);
  }
}