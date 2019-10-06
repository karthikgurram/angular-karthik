import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { LoginUserService } from './login-user.service';
import { LoginComponent } from './login.component';
import { Globals } from '../globalVaraibles';
@Injectable({
  providedIn: 'root'
})
export class CanActivateguardLoginService implements CanActivate {
  isloggedon: any
  i: number

  constructor(private _loginCom: LoginComponent, 
    private _loginserviceUsingDI: LoginUserService, private _router: Router, private varDIGlobal: Globals) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.isloggedon = this._loginCom.getLoggedinStatus()
    console.log("Component:CanActivateguardLoginService Method:canActivate begin" + this.isloggedon)
    // setTimeout(() => {
      console.log("timout")
      console.log("Component:CanActivateguardLoginService Method:canActivate during timeout" + this.isloggedon)

      // if (this.isloggedon == undefined) {
      //   console.log("Component:CanActivateguardLoginService Method:canActivate " + this.isloggedon)
      // }

      if (!this.varDIGlobal.isloggedon) {
        console.log("User not logged on so redierctibg to login page")        
        this._router.navigate(['/login'], { queryParams: { retUrl: route.url } });
        console.log("previous route url is =" + route.url + "i value is " + this.i)
        // this._router.navigate([route.url])
        return false;
      }

      console.log("User is already logged on ")

      //const url: string = this._Actiroute.snapshot.url.join('')
      //const url= route.url
      //const state2 = state.url

      //console.log("previous url is ="+ url)
      // console.log("previous url2 is ="+ url)
      //console.log("previous url2 is =" + state2)
      //this._router.navigate([state.url]);
      //const userExists = this._loginService.AllUserDetails(route.paramMap.get('emailid'), route.paramMap.get('pwd'))
      // if (true) {
      //   this._router.navigate([state2]);
      //   return true

      // }
      // else {
      //   this._router.navigate(['/login']);
      //   return false
      // }



    // },
    //   5000)
    return true
  }
}