import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit{
constructor(private _service:RegistrationService, private _router :Router){}
currentuser:string;
ngOnInit(){
  this.currentuser=localStorage.getItem('currentuser')?.toString();
}

goToAddUser(){
  this._router.navigate(['/register']);
  
}
viewUser(){
  this._router.navigate(['/userlist']);
  
}
goToLogin(){
  this._router.navigate(['/login']); 
}
}
