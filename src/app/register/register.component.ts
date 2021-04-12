import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email="Enter your email";
  pwd="Enter your password";
  accno="Enter account number";
  

  constructor(private dataService:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    email:["",[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:["",[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:[""]
  })

  
  registration()
  {
    if(this.registerForm.get('email')?.errors)
    {
      alert("invlaid username")
      
    }
    if(this.registerForm.valid)
    {

    this.dataService.register(this.registerForm.value.accno,this.registerForm.value.email,this.registerForm.value.pwd)
    // console.log(this.email,this.accno,this.pwd);
    this.router.navigateByUrl("");
    
    }
    // console.log(this.registerForm.value);
    
  
    
  }
  
  

}
