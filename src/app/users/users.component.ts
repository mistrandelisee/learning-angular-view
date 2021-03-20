import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor() {
    this.users=[{id:1,name:'toto1'},{id:2,name:'toto2',active:true},{id:3,name:'toto3'},{id:5,name:'toto5'}];
   }

  ngOnInit(): void {
  }

}
