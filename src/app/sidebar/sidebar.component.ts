import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() userData:any;
  @Output() viewAddPerson =new EventEmitter<any>();
  @Output() viewUsers =new EventEmitter<any>();
  @Output() viewLogin =new EventEmitter<any>();
  @Output() viewDashboard =new EventEmitter<any>();
  ngOnInit(): void {
  }
  addperson() {
    this.viewAddPerson.emit();
  }
  users() {
    this.viewUsers.emit();
  }
  login() {
    this.viewLogin.emit();
  }
  dashboard(){
    this.viewDashboard.emit();
  }

}
