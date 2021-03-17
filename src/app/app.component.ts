import { Component ,EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-client';
  submitted = false;
  errMsg;
  userData;
  constructor() {
    this.errMsg={}
  }
  @Input() conversations: any[];
  @Output() newConversationId =new EventEmitter<string>();
  onSubmitHandler(login:any) {
    console.log(login);
    //call server
    //get result
    //if error send it on page
    //else set submitted to true
    this.userData=login
    this.submitted=true;

  }
  onlogoutHandler(data:any) {
    console.log('this user has logged out :');
    //call server
    //get result
    //if error send it on page
    //else set submitted to true
    this.errMsg.msg='you logged out succesfully'
    this.errMsg.warning=true
    this.submitted=false;

  }

}
