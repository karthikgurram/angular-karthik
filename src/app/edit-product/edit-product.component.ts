import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products/product';
import { ViewProductServiceService } from '../view-product/view-product-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
@ViewChild('editProductForm',{static:false}) public varEditForm : NgForm;

  constructor(private toastr: ToastrService,
    private _varusingDIforSerice: ViewProductServiceService,
     private route: ActivatedRoute, private _router: Router) {


    //this.AssignDetails();

  }
  lblproName: string
  lblproDesc: string
  lblpriceRef: number
  lblman: string
  lblquantity: number
  ProductslistfromJson2: Product

  IDfromView: number


  getIndividualProductDetails() {
    console.log(this.IDfromView + "in get individual pro details")
    return this._varusingDIforSerice.ViewIndividualProduct(this.IDfromView).subscribe(
      (dataUsingArrowFunction: Product) => this.ProductslistfromJson2 = dataUsingArrowFunction,
      error => console.error("Component:Edit-product Method:getIndividualProductDetails FAILURE ")
    )
  }

  ngOnInit(): void {
    //let customObj2 = new Product();
    this.route.paramMap.forEach((params: Params) => {
      //  this.NameFromView = params.get('productName');
      this.IDfromView = params.get('id')
      console.log(this.IDfromView + " id from here")
    });

    this.getIndividualProductDetails();
    //this.varQty=this.ProductsfromJson2.Quantity
    // alert(this.ProductsfromJson2)



  }

  EditProduct() {
    let customObj = new Product();

    if (this.lblproName == null) { customObj.productName = this.ProductslistfromJson2.productName }
    else { customObj.productName = this.lblproName }

    if (this.lblproDesc == null) { customObj.Productdescription = this.ProductslistfromJson2.Productdescription }
    else { customObj.Productdescription = this.lblproDesc }

    if (this.lblman == null) { customObj.Manufacturer = this.ProductslistfromJson2.Manufacturer }
    else {  customObj.Manufacturer = this.lblman; }

    if (this.lblpriceRef == null) { customObj.Price = this.ProductslistfromJson2.Price }
    else {  customObj.Price = this.lblpriceRef; }

    if (this.lblman == null) { customObj.Manufacturer = this.ProductslistfromJson2.Manufacturer }
    else {  customObj.Manufacturer = this.lblman; }

    if (this.lblquantity == null) { customObj.Quantity = this.ProductslistfromJson2.Quantity }
    else {  customObj.Quantity = this.lblquantity }
    
    
    console.log(this.IDfromView + "in get individual pro details")
    return this._varusingDIforSerice.EditDatainJsonServer(this.IDfromView, customObj).subscribe(
      success => {  this.toastr.success('Product '+ customObj.productName  +' updated Successfully !', '');
      this._router.navigate(['/products'])
    },
      error => console.error("Component:Edit-product Method:EditProduct FAILURE ")
    )

  }
}
