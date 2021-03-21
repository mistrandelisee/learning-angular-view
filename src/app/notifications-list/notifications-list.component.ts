import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  @Output() selectNotification =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelelect() {
    var notificationSelected=1;

    //this.submitted = true;
    // alert(JSON.stringify(this.login))
    this.selectNotification.emit(notificationSelected);
  }
}
