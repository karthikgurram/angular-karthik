import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../register/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  UserDetail: User[]
  constructor(private _varhttp: HttpClient) { }
  private _varURL = "http://localhost:3000/RegistrationDetails/";

  AllUserDetails() {
    console.log("Service:Login  Method:AllUserDetails " )
    return this._varhttp.get(this._varURL)
  }

  UpdateisLoggedon(varID: Number, varUser: User):Observable<object> {
    console.log("Service:Login  Method:UpdateisLoggedon " + this._varURL + varID + varUser.isLoggedOn)
    return this._varhttp.put(this._varURL + varID, varUser)
  }

  getLoggedinStatus(varID: number) {
    console.log("Service:Login  Method:getLoggedinStatus " + this._varURL + varID)
    return this._varhttp.get(this._varURL + varID)
  }

  LogOutUser(varID: Number, varUser: User)
  {
    varUser.isLoggedOn=false
    console.log("Service:Login  Method:LogOutUser " + this._varURL + varID + varUser.isLoggedOn)
    return this._varhttp.put(this._varURL + varID, varUser)

  }



}
