import { Injectable } from '@angular/core';
import { User } from './user';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User): Observable<object>{
return this._http.post("http://localhost:8085/login",user)
  }
  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/registeruser",user);
  }
  public updateUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8085/updateuser",user);
  }
  

  handleError(error:Response){

  }

  fetchUserListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8085/getuserlist")
  }
  fetchUserByIdFromRemote(id:any):Observable<any>{
    return this._http.get<any>("http://localhost:8085/getuserbyid/"+id)
  }
  deleteUserByIdFromRemote(id:any):Observable<any>{
    return this._http.delete<any>("http://localhost:8085/deleteuserbyid/"+id)
  }
}
