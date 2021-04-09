import { Router, NavigationExtras ,ActivatedRoute, ParamMap } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isEnable } from 'src/models/enabler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 enable:isEnable;
 userSelected;
 prev:string;
  constructor( private route: Router) { }
  @Input() data:any;
  @Output() logout =new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.data);
    this.enable=new isEnable();
    this.enable.dashboard=true;
    this.prev='dashboard';
  }
  /**
   * dologout
   */
  public dologout() {
    this.logout.emit(this.data);
  }
  /**
   * navigateto
   */
  public navigateto() {
    alert('navigate to '+this.prev)
    this.enable.disableAll();
    this.enable[this.prev]=true;
    this.route.navigate(['user',1]);
  }
  /**
   * onSelectNotification
   */
  public handleSelectNotification(notif) {
    this.enable.enableNotificationView();
  }

  public handleViewAdherants() {
    this.enable.enableUsers();
  }
  public handleViewAdherant(user:any) {

    this.userSelected=user;
    console.log(user);
    this.prev='users';
    this.enable.enableUserView();
  }
  public handleViewProfile() {
    this.enable.enableProfile();
  }
  public handleViewAddPerson() {
    this.enable.enableAddPerson();
  }
  public handleViewDashboard() {
    this.enable.enableDashboard();
  }

}
