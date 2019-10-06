import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from './product';
import { ProductsServiceService } from './products-service.service';
import { Globals } from '../globalVaraibles';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  NameFromView: string 
  DescFromView: string
  ManFromView: string
  PriceFromView: string 
  QtyFromView: number
  varglobal:Globals
  showProductName:boolean=true
  showProductDes:boolean=true
  showMan:Boolean=true
  showPrice:Boolean
  showQuantity:Boolean
  showControls:Boolean
  a:Boolean=true
  searchText;
  isAlertON:boolean=true
  loadDeleteProductButton:boolean
  loadDeletingProductButton:boolean    

  
  

  constructor(private toastr: ToastrService,private _getdatafromServiceusingDI: ProductsServiceService, globals: Globals) { 
    this.varglobal = globals
    this.loadDeleteProductButton=this.varglobal.loadDeleteProductButton
    this.loadDeletingProductButton=this.varglobal.loadDeletingProductButton

    // this.varglobal.loadDeleteProductButton=true
    // this.varglobal.loadDeletingProductButton=false    
  }

  ngOnInit() {
    this.getDatafromProductsService();
    this.showProductName = true
    this.showProductDes = true
    this.showMan = true
    this.showPrice = true
    this.showQuantity = true
  
  }
  ProductsfromJson2: Product[]
  // Static data to check!! Use this when you think service is not working and you wnat static data
  // ProductsfromJson2: Product[] = [
  //   {id:3,  productName : 'Moto G5', Productdescription:'Moto', Manufacturer:'Apple',Price:'556',Quantity: 2, }
  // ];

  // Used below function to get the data from service and assign to a array varable and u can use this in view
getDatafromProductsService():void
{
  this._getdatafromServiceusingDI.getDatafromJsonServer().subscribe(
    (dataUsingArrowFunction:any)=> this.ProductsfromJson2= dataUsingArrowFunction,
    err => console.log(err)
  );
}

SendDataToChildComponent(): string
  {
    return this.NameFromView;
  }

  deleteProduct(id :number)
  {
    console.log(id + " delete function is hit")
    if(confirm("Are you sure you want to delete the product  ? "))
     {      
      this._getdatafromServiceusingDI.DeleteProductFromDatabase(id).subscribe(
        success => alert("Product deleted successfully"),
        err => console.log(err)      )
      this.getDatafromProductsService();
    }
    

    
  }
  

  ShowProductNameEvent(event) {
    if (event.target.checked) {
      this.showProductName = true;

    }
    else {
      this.showProductName = false
    }
  }

  ShowProductDescEvent(event) {
    if (event.target.checked) {
      this.showProductDes = true;

    }
    else {
      this.showProductDes = false
    }
  }

  ShowProductManEvent(event) {
    if (event.target.checked) {
      this.showMan = true;
      this.toastr.info('Manufacture information is now shown  !');
    }
    else {
      this.toastr.info('Manufacture information is now hidden  !');
      this.showMan = false
    }
  }

  ShowProductQtyEvent(event) {
    if (event.target.checked) {
      this.showQuantity = true;
      this.toastr.info('Quantity information is shown now !');
    }
    else {
      this.toastr.info('Quantity information is hidden now !');
      this.showQuantity = false
    }
  }

  ShowProductPriceEvent(event) {
    if (event.target.checked) {
      this.showPrice = true;
      this.toastr.info('Price information is now shown !');

    }
    else {
      this.toastr.info('Price information is now hidden !');
      this.showPrice = false
    }

    
  }
  ShowHideControls(event) {
    
    if (this.a) {

      this.showControls = true;
      this.a=false

    }
    else {
      this.showControls = false
      this.a=true
    }
  

}
}