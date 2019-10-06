// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    firstName: string = 'karthik';
    isloggedon: boolean;
    loginString: string ="SignIn"
    logOutString :String=""
    // (this.isloggedon ? ("hi " +this.firstName) : "Sign In" )
    FirstName : string;
    LastName : string;
    EmailID : string;
    Password : string;
    MobNumber : Number;
    Location: string;
    viewProfileString=""
    loadDeleteProductButton:boolean=true
    loadDeletingProductButton:boolean=false
}