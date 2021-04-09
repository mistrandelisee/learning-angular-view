import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { human } from './../../models/human';
import { HumanServiceService } from './../human-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  isloading=true;
  isError=false;
  constructor(private personeService: HumanServiceService) {
    // this.users=[{id:1,name:'toto1'},{id:2,name:'toto2',active:true},{id:3,name:'toto3'},{id:5,name:'toto5'}];
   }
   @Output() selectUser=new EventEmitter<any>();
   @Output() addPerson=new EventEmitter<any>();
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.personeService.allPersons().subscribe(
      data => {
      console.log('personesss  ');
      console.log(data);
      this.isloading=false;
      this.users=data;

    }
    ,
        error => {//error handling
          console.log(error);
          this.isloading=false;
          this.isError=true;
          }
    )
  }
  refresh(){
    this.isloading=true;
    this.isError=false;
    this.getData();
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
