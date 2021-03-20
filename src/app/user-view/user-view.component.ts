import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  user;
  users=[];
  constructor( private route: ActivatedRoute,
    private location: Location) {
    this.users=[{id:1,name:'toto1'},{id:2,name:'toto2',active:true},{id:3,name:'toto3'},{id:5,name:'toto5'}];

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user=this.users.find(e=>e.id==id);
  }

}
