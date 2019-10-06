import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProductServiceService } from './add-product-service.service';
import { Product } from '../products/product';
import { Alert } from 'selenium-webdriver';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @ViewChild('f',{static:false}) public f:NgForm;

  constructor(private toastr: ToastrService,private _getdatafromServiceusingDI: AddProductServiceService, private _router : Router) { }

  
  lblproName : string
  lblproDesc : string
  lblpriceRef : number
  lblman  : string
  lblquantity : number
  loadAddProductbutton:boolean=true
  loadSpinnerButton:boolean=false

  ngOnInit() {
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  onSubmit()
  {
    let customObj = new Product();

    customObj.productName=this.lblproName
    customObj.Productdescription = this.lblproDesc
    customObj.Manufacturer = this.lblman;
    customObj.Price = this.lblpriceRef
    customObj.Quantity=this.lblquantity;
    this.loadAddProductbutton=false
        this.loadSpinnerButton=true;
    (async () => { 
      // Do something before delay
      console.log('before delay')
  
      await this.delay(3000);
    
    this._getdatafromServiceusingDI.AddDataTojsonServer(customObj).subscribe(
      success=>{
        

      this.toastr.success(this.lblproName+ " Product Added Successfully!!", '');
      this._router.navigate(['/products']);},
      error=>alert(error)
    );
// Do something after
console.log('after delay')
})();
    

  }

}
