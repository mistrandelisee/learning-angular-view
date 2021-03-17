import { personne } from './../../models/personne.model';
import { Hero } from './../../models/hero.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  person;
  constructor( private location: Location) {
    this.person=new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  }


  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

   submitted = false;

  onSubmit() { this.submitted = true; alert(JSON.stringify(this.person))}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.person); }
  ngOnInit(): void {
    }
  goBack(): void {
    this.location.back();

  }
  newHero() {
    this.person = new Hero(42, 'toto', '');
  }
}
