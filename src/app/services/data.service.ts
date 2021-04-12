import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  accountdetails:any = {
    1000: { accno: 1000, name: "userone", balance: 6000, password: "user1" },
    1001: { accno: 1001, name: "usertwo", balance: 9000, password: "user2" },
    1002: { accno: 1002, name: "usertwo", balance: 5000, password: "user3" }

}
saveDetails()
{
localStorage.setItem("accountdetails", JSON.stringify(this.accountdetails))
// localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
}
getDetails(){
  if(localStorage.getItem("accountdetails"))
  {
  this.accountdetails=JSON.parse(localStorage.getItem("accountdetails")||'')
}}
currentUser:any="";
register(accno:any,name:any,password:any)
{
if(accno in this.accountdetails)
{
  alert("User exist.Please log in")
}
else{

  this.accountdetails[accno]={
    accno,name,balance:0,password
    
  }
  alert("registration successful");
  this.saveDetails();
}

}
  constructor() { 
    this.getDetails();
  }

login(uname:any,pass:any)
{
  let data=this.accountdetails;
  if(uname in data)
  {
    if(pass==data[uname].password)
    {
      return true;
    }
    else{
      return false;
    }

  }
  else{
    return false;
  }

}
dash(accno:any,amt:any){
let data=this.accountdetails;
if(accno in data)
{
data[accno].balance+=Number(amt);
alert("Deposited successfully\n Available balance:"+data[accno].balance)
this.saveDetails();
return true;
}
else{

  return false;
}

}
}