import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(public dataService:DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  dashboardForm=this.fb.group({
    accno:["",[Validators.required,Validators.pattern('[0-9]*')]],
    amt:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })
  dash()
  {

    if(this.dashboardForm.get('accno')?.errors)
    {
      alert("invalid accno")
    }
    // alert("login works")
    // \
    var uname=this.dashboardForm.value.accno;;
    var amount=this.dashboardForm.value.amt;
    //console.log(uname+pass);
    if(this.dashboardForm.valid)
    {
      var result=this.dataService.dash(uname,amount)
      if(result)
      {

       
        this.router.navigateByUrl("")        
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
