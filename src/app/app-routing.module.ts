import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'
import{DashBoardComponent} from './dash-board/dash-board.component'
const routes: Routes = [
  {path:'',component:LoginComponent
},
  {
    path:'register', component:RegisterComponent 
    
  },
  {
    path:'dash_board', component:DashBoardComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
