import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationServiceService } from './registration-service.service';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: any
  locations: string[] = ["UK", "US", "India", "Canada"];
  @ViewChild('registerForm', { static: false }) public varRegisterForm: NgForm
  constructor(private toastr: ToastrService, private _varDIService: RegistrationServiceService, private _router: Router) { }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  ngOnInit() {
  }

  lblfirstName: string
  lbllastName: string
  emailid: string
  lblpassword: string
  lblmobNum: Number
  location: string
  loadSpinnerButton: boolean = false
  loadRegisterButton: boolean = true

  RegisterUser() {
    let custobj = new User();

    custobj.EmailID = this.emailid
    custobj.FirstName = this.lblfirstName
    custobj.LastName = this.lbllastName
    custobj.Location = this.location
    custobj.MobNumber = this.lblmobNum
    custobj.Password = this.lblpassword
    custobj.isLoggedOn = false

    this._varDIService.RegisterUser(custobj).subscribe(
      sucess => {
        this.loadRegisterButton = false
        this.loadSpinnerButton = true;
        (async () => {
          // Do something before delay
          console.log('before delay')

          await this.delay(5000);
          this.loadRegisterButton = true
          this.loadSpinnerButton = false;
          this.toastr.success("Hey " + this.lblfirstName + " you are registered successfully !! ", 'Please login now !');
          // Do something after
          console.log('after delay')
         this.registerForm=null;
          this._router.navigate(['/login'])


        })();
      },
      error => alert(error),
      () => {
        //this._router.navigate(['/login'])
        
      }
    )

  }

}
