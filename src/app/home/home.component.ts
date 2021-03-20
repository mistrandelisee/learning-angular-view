import { Router, NavigationExtras ,ActivatedRoute, ParamMap } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: Router) { }
  @Input() data:any;
  @Output() logout =new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.data);

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
    alert('toto')
    this.route.navigate(['user',1]);
  }

}
