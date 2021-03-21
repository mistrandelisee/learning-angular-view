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
    if (document.cookie.replace(/(?:(?:^|.*;\s*)learningApp-user\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {

      let cookieValue=document.cookie.replace(/(?:(?:^|.*;\s*)learningApp-user\s*\=\s*([^;]*).*$)|^.*$/, "$1")
      console.log('The cookie value',cookieValue)
      this.submitted = true;
      this.userData={username:cookieValue}
    }
    else{

      console.log('The cookie "reader" hasn\'t "1" for value')
    }
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
    if(login.alive)
    this.doOnce(login.username)

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
    document.cookie = `learningApp-user=; expires=Fri, 31 Dec 9999 23:59:59 GMT`;


  }
   doOnce(user_token) {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)learningApp-user\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== user_token) {
      alert("Do something here!");
      document.cookie = `learningApp-user=${user_token}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

    }
  }

}
