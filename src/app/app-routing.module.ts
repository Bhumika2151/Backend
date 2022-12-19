import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
{
  path:'edituser',component:EdituserComponent
},
{
  path:'edituser/:id',component:EdituserComponent
},
{
  path:'adminhome',component:AdminhomeComponent
},
  {
    path:'login',component:LoginComponent
  },
  
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'userlist',component:UserlistComponent
  },
  {
    path:'userhome',component:UserhomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
