import { Component ,OnInit} from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit 
{
  user : User[] | undefined;
  constructor(private _service:RegistrationService, private _router :Router ){}
  currentuser:string;
ngOnInit(){
  this._service.fetchUserListFromRemote().subscribe(
    data=>{console.log("response received");
    this.user=data;
  },

    error=>console.log("exception occured")
  )
  this.currentuser=localStorage.getItem('currentuser')?.toString();
}
goToLogin(){
  this._router.navigate(['/login']); 
}
}
