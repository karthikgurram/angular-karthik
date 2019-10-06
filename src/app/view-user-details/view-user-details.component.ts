import { Component, OnInit } from '@angular/core';
import { Globals } from '../globalVaraibles';
import { User } from '../register/user';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.css']
})
export class ViewUserDetailsComponent implements OnInit {
 
  varlocalUserDetails :Globals

  constructor(private _varDIglobals: Globals) { 
    this.varlocalUserDetails=this._varDIglobals
    // this.varlocalUserDetails.FirstName= _varDIglobals.FirstName
    // this.varlocalUserDetails.LastName= _varDIglobals.LastName
    // this.varlocalUserDetails.EmailID= _varDIglobals.EmailID
    // this.varlocalUserDetails.MobNumber= _varDIglobals.MobNumber
    // this.varlocalUserDetails.Password= _varDIglobals.Password
    // this.varlocalUserDetails.Location=_varDIglobals.Location
  }

  ngOnInit() {
  }

}

