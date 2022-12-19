import { Component ,OnInit} from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  
  user : User[] | undefined;
    constructor(private _service:RegistrationService, private _router :Router ){}
    ngOnInit(){
      this._service.fetchUserListFromRemote().subscribe(
        data=>{console.log("response received");
        this.user=data;
      },

        error=>console.log("exception occured")
      )

    }
    goToAddUser(){
      this._router.navigate(['/register']);
      
    }
    goToEditUser(id:any){
console.log("id"+id);
this._router.navigate(['/edituser',id]);

    }
    deleteUserById(id:number){
        this._service.deleteUserByIdFromRemote(id).subscribe(
          data=>{console.debug("deleted successfully");
          this._router.navigate(['/userlist']);
        
        
        },
        error => console.log("exception occured")
          
        )
      }
      
      goTohome(){
        this._router.navigate(['/adminhome']);
      }
      
     
    

}
