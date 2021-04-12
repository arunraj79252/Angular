import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
 accno="enter";
 pwd="enter";
 str="perfect partner";
 loginForm=this.fb.group({
  accno:["",[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})
  constructor(private router:Router, private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // getUsername(Event:any){
  //   this.accno=Event.target.value;
  //  // console.log(this.uname);
    
  // }
  // getPassword(Event:any)
  // {
  //   this.pwd=Event.target.value;
  //   //console.log(this.pass);
    
  // }
 
  login()
  {

    if(this.loginForm.get('accno')?.errors)
    {
      alert("invalid accno")
    }
    // alert("login works")
    // \
    var uname=this.loginForm.value.accno;;
    var pass=this.loginForm.value.pwd;
    //console.log(uname+pass);
    if(this.loginForm.valid)
    {
      var result=this.dataService.login(uname,pass)
      if(result)
      {

        alert("login successful")
        this.dataService.currentUser=uname;
        this.router.navigateByUrl("dash_board")        
      }
      else
      {
        alert("invalid credentials")
      }
    }
else{

  alert("INVALID")
}

  }

}
