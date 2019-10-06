import { Component, OnInit,Input } from '@angular/core';
import { ViewProductServiceService } from './view-product-service.service';
import { Product } from '../products/product';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private _varusingDIforSerice: ViewProductServiceService, private route: ActivatedRoute, private router: Router) {

    
    //this.AssignDetails();
   
  }

   ProductslistfromJson2 :Product

//  @Input() NameFromView: string
//  @Input() DescFromView: string
//  @Input() ManFromView: string
//  @Input() PriceFromView: string
//  @Input() QtyFromView: number
//  @Input() varQty: Number



  IDfromView: number
  // ngOnInit() {

  // }

  getIndividualProductDetails() {
    console.log(this.IDfromView + "in get individual pro details")
    this._varusingDIforSerice.ViewIndividualProduct(this.IDfromView).subscribe(
      (dataUsingArrowFunction: Product) =>
      { this.ProductslistfromJson2 = dataUsingArrowFunction;
        this.ProductslistfromJson2.ViewCount = this.ProductslistfromJson2.ViewCount + 1
        this._varusingDIforSerice.EditDatainJsonServer(this.IDfromView, this.ProductslistfromJson2).subscribe(
          success => console.log("viewcount is increamented successfully"),
          error => console.error("Component:Edit-product Method:EditProduct FAILURE ")
        )
      },
      error => console.log("ERROR component:View-product; Method:getIndividualProductDetails")
    )

    console.log("View count before is" + this.ProductslistfromJson2.ViewCount)
    
    console.log("View count after is" + this.ProductslistfromJson2.ViewCount)

    
  } 

  ngOnInit(): void {
    //let customObj2 = new Product();
    this.route.paramMap.forEach((params: Params) => {
    //  this.NameFromView = params.get('productName');
    this.IDfromView=params.get('id')
    console.log(this.IDfromView + " id from here")
    });

    this.getIndividualProductDetails();
    //this.varQty=this.ProductsfromJson2.Quantity
    // alert(this.ProductsfromJson2)



  }
}


// .find((x => x.id ===1))