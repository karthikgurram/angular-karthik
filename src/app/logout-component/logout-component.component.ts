import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../login/login-user.service';
import { User } from '../register/user';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';
import { Globals } from '../globalVaraibles';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {

  constructor(private toastr: ToastrService,private _loginService: LoginUserService, private _router: Router, private _varDIGlobal:Globals) {
    this.LogOutUser()
  }

  ngOnInit() {
  }

  LogOutUser() {
    console.log("Component:Logout Method:LogOutUser start of method ")
    let id = 6

    let varuser = new User();
    varuser.EmailID='admin@wipro.com'
    varuser.Password='admin'
    this._varDIGlobal.isloggedon=false
    this._varDIGlobal.loginString= (this._varDIGlobal.isloggedon ? ("hi " + this._varDIGlobal.firstName) : "Sign In" )
    this._varDIGlobal.logOutString= (this._varDIGlobal.isloggedon ? ("Sign Out") : "" )
    this._varDIGlobal.viewProfileString=(this._varDIGlobal.isloggedon ? "ViewProfile" : "" )
    this.toastr.success('Log out Successfull !', '');
    this._router.navigate(['/products']);
    // this._loginService.LogOutUser(id, varuser).subscribe(
    //   success => {
    //     console.log("Component:Logout Method:LogOutUser SUCESSS ");
       
    //   },
    //   error => console.log("Component:Logout Method:LogOutUser FAILURE "),
    //   () => {
    //     alert("Log out successful");
    //     this._router.navigate(['/products']);

    //   }
    // )

  }

}
