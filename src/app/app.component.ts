import { Component, ViewChild, ElementRef } from '@angular/core';
import { Globals } from './globalVaraibles';
import { User } from './register/user';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductsInventory';

 localvarGlobals : Globals

  public firstName: string
  isloggedOn : boolean 
  
  constructor(varDIGlobals: Globals) {
    this.localvarGlobals = varDIGlobals
    this.isloggedOn=varDIGlobals.isloggedon
    console.log("Compoenet: App, Method: COnstructor"+this.isloggedOn)
  }

  @ViewChild('alert', { static: true }) alert: ElementRef;

  closeAlert(event) {
    alert("test")
    this.alert.nativeElement.classList.remove('show');
    //this.isAlertON=false
  }

//   showToaster(){
//     this.toastr.success("Hello, I'm the toastr message.")
// }
}
