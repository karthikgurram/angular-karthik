import { Component, OnInit } from '@angular/core';
import { LoginUserService } from './login-user.service';
import { User } from '../register/user';
import { isNullOrUndefined } from 'util';
import { Router, NavigationEnd, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import * as myGlobals from '../globalVaraibles';
import { Globals } from '../globalVaraibles';
import { of, Observable, observable } from 'rxjs';
import { AlertService } from '../alert-component/alert.service';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersList: User[]
  length: number
  emailid: string
  lblpassword: string
  userExistsOrNot: boolean
  retUrl: string[];
  Anumber: number
  loadSpinner:boolean
  loadLoginForm:boolean=true
  img="\ProductsInventory\src\app\images\Login_background.jpg"
  
  // isLoaded:Observable<boolean>

  loggedInUserDetail: User

  public isloggedIn: boolean;
  //private isloggedOn2:boolean

  constructor(private toastr: ToastrService,private _loginserviceUsingDI: LoginUserService,
     private _router: Router, private activatedRoute: ActivatedRoute,private varDIGlobal:Globals) {
    //this.isloggedIn = false
   // this.isloggedOn2=varDIGlobal.isloggedon
  }
  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.getAll('retUrl');
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      });

    //  this.getLoggedinStatus()
  }


  // logOutUser(id: number) {

  //   console.log("Component:Login  Method:logOutUser " + id)
  //   let customObj = new User();

  //   customObj.EmailID = "admin@wipro.com"
  //   customObj.Password = "admin"
  //   customObj.isLoggedOn = false


  //   console.log(id + "in get individual pro details")
  //   return this._loginserviceUsingDI.UpdateisLoggedon(id, customObj).subscribe(
  //     success => alert("sucess"),
  //     error => console.log("error in updating user")
  //   )

  // }
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  loginUser() {
    let a: boolean


    console.log(this.emailid + this.lblpassword)
    this._loginserviceUsingDI.AllUserDetails().subscribe(
      (x: any[]) => {
        this.usersList = (x.filter(x => x.EmailID == this.emailid && x.Password == this.lblpassword));
        console.log("user length is " + this.usersList.length)
        if (this.usersList.length > 0) {
          console.log("Component:Login  Method:loginUser LOGIN SUCESS" + this.usersList[0].id )
          this.loadLoginForm=false
          this.loadSpinner=true;
          
          (async () => { 
            // Do something before delay
            console.log('before delay')
        
            await this.delay(3000);
            this.toastr.success('Login Successfull !', 'Hey ' + this.usersList[0].FirstName + '!');

            this.varDIGlobal.isloggedon = true;
            this.varDIGlobal.loginString = (this.varDIGlobal.isloggedon ? ("Hi " + this.usersList[0].FirstName) : "Sign In")
            this.varDIGlobal.logOutString = (this.varDIGlobal.isloggedon ? "SignOut" : "")
            //this.UpdateisLoggedon(this.usersList[0].id);
            this.varDIGlobal.FirstName = this.usersList[0].FirstName
            this.varDIGlobal.LastName = this.usersList[0].LastName
            this.varDIGlobal.EmailID = this.usersList[0].EmailID
            this.varDIGlobal.Location = this.usersList[0].Location
            this.varDIGlobal.MobNumber = this.usersList[0].MobNumber
            this.varDIGlobal.Password = this.usersList[0].Password
            this.varDIGlobal.viewProfileString = (this.varDIGlobal.isloggedon ? "ViewProfile" : "")
            {
              console.log('return to ' + this.retUrl[0] + '/' + this.retUrl[1] + '/');
              if (this.retUrl.length > 0) {
                if (this.retUrl[2] == undefined) { this.retUrl[2] = null }
                this._router.navigate([this.retUrl[0] + '/' + this.retUrl[1] + '/' + this.retUrl[2]]);
              } else {
                this._router.navigate(['/products']);
              }
            }
            // Do something after
            console.log('after delay')
        })();

         

         
        }
        else {
         // alert("Login unsuccessfull !! Please try again")
         this.toastr.error('Please try again!!','Login unsuccessfull !');
          this.emailid = null
          this.lblpassword = null
        }

        
      },
      error => console.error("Error while fetching all users from service"),
      () => { })
  }

  // iisUserLoggedIn(): boolean {
  //   // console.log(this.isloggedIn + "before ;;; is hit"+ this.Anumber)
  //   // if (this.isloggedIn== false) 
  //   // { this.isloggedIn= true }
  //   // else { this.isloggedIn= false }
  //    console.log(this.isloggedIn + "after '''is hit"+ this.isloggedIn)
  //   return this.isloggedIn;
  // }


  UpdateisLoggedon(id: Number) {

    console.log("Component:Login  Method:UpdateisLoggedon " + id)

    let customObj = new User();

    customObj.EmailID = "admin@wipro.com"
    customObj.Password = "admin"
    customObj.isLoggedOn = true

     this._loginserviceUsingDI.UpdateisLoggedon(id, customObj).subscribe(
      success => console.log("Component:Login Method:UpdateisLoggedon SUCESSS "),      
      error =>console.log("Component:Login Method:UpdateisLoggedon FAILURE "),
      ()=>
// setTimeout(() => {
       {
         console.log('return to ' + this.retUrl[0] + '/' + this.retUrl[1] + '/');
         if (this.retUrl.length > 0) {
           if (this.retUrl[2] == undefined) { this.retUrl[2] = null }
           this._router.navigate([this.retUrl[0] + '/' + this.retUrl[1] + '/' + this.retUrl[2]]);
         } else {
           this._router.navigate(['/products']);
         }
       } 
      //   },
      // 5000)
       
    )

  }

  getLoggedinStatus(): boolean {

    var id: number = 6
    console.log("Component:Login  Method:getLoggedinStatus " + id)

    this._loginserviceUsingDI.getLoggedinStatus(id).subscribe(
      (dataUsingArrowFunction: any) => {
        this.loggedInUserDetail = dataUsingArrowFunction;
        this.isloggedIn = this.loggedInUserDetail.isLoggedOn;
        console.log("Component:Login  Method:getLoggedinStatus and sucess method loggedon is " + this.isloggedIn + "and isLoaded is" )
      },
      error => console.log("Component:Login Method:getLoggedinStatus FAILURE "),
      ()=>
      {
        //this.isLoaded=true
        this.isloggedIn = this.loggedInUserDetail.isLoggedOn;
        console.log("Component:Login  Method:getLoggedinStatus and completed method loggedon is " + this.isloggedIn + "and isLoaded is" )
      }
    )
    console.log("Component:Login  Method:getLoggedinStatus after loop is " + this.isloggedIn)
    return this.isloggedIn
  }
}




