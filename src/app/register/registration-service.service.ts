import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private _varhttpClient: HttpClient){}

  private _varURL= "http://localhost:3000/RegistrationDetails"

  RegisterUser(varUser: User)
  {
  return  this._varhttpClient.post(this._varURL,varUser)
  }

}
