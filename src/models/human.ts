'use strict'
  export class human  {
    id: number;
    username:string=`AD- ${new Date().getMilliseconds()}`;
    firstName: string;
    lastName: string;
    fullName: string;
    phone: string;
    active: boolean;
    setPK(){
      return `AD- ${new Date().getMilliseconds()}`;
    }
  }

