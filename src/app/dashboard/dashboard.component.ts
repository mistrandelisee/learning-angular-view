import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPanelChangeEvent, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accordion: NgbAccordionModule;
  constructor() { }

  ngOnInit(): void {
  }
  beforeChange($event: NgbPanelChangeEvent) {
    console.log($event.panelId);
    if ($event.panelId === 'panelOne') {
      $event.preventDefault();
    }

    if ($event.panelId === 'panelTwo' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  togglePanel(id){
    this.accordion.toggle(id);
  }

}
