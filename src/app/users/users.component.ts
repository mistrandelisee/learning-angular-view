import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
   @Output() selectUser=new EventEmitter<any>();
   @Output() addPerson=new EventEmitter<any>();
  ngOnInit(): void {
  }
  addperson(){
    this.addPerson.emit()
  }
  onSelect(evt){
    console.log(evt.target.id);

    var selected=this.users.find(u=>u.id==evt.target.id);
    console.log('selected');
    console.log(selected);


    this.selectUser.emit(selected)
  }

}
