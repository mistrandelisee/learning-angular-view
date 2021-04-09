import { human } from './../../models/human';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HumanServiceService } from '../human-service.service';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddpersonComponent implements OnInit {
  person:human;
  processError;
  hasError=false;
  update=false;
  isLoading=false ;
  submitted = false;
  constructor( private location: Location,private personeService: HumanServiceService) {
    this.person=new human();
  }
  edit(){
    this.update=true;
    this.submitted=false;
  }
  onSubmit() {
    this.isLoading=true;
    this.hasError=false;
    let userdata={
      obj:this.person,
      objname:"human"
    }
    if(this.update){

      let {id,fullName, ...rest}= this.person;

      let formatData={user:rest};
      console.log(formatData);
      this.personeService.updatePerson(formatData).subscribe(
        data => {
          console.log(data);
          this.person= data[1];
          this.submitted = true;
          this.isLoading=false;
          // this.user=new personne();
        },
        error => {//error handling
          console.log(error);
          this.isLoading=false;
          this.hasError=true;
          this.processError=error;
          }
      )
    }else{

      this.personeService.addPerson(userdata).subscribe(
        data => {
          console.log(data);
          this.person= data;
          this.submitted = true;
          this.isLoading=false;
        },
      error => {//error handling)
        console.log(error);
        this.isLoading=false;
          this.hasError=true;
          this.processError=error;

      }
      )
    }

  }

  get diagnostic() { return JSON.stringify(this.person); }
  ngOnInit(): void {
    }
  goBack(): void {
    this.location.back();

  }
  newHero() {
    this.person = new human();
  }
}
