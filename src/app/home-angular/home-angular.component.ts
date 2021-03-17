import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-angular',
  templateUrl: './home-angular.component.html',
  styleUrls: ['./home-angular.component.css']
})
export class HomeAngularComponent implements OnInit {
  title:string;
  constructor() {}

  ngOnInit(): void {
    this.title ='ImporterComponent;';
  }

}
