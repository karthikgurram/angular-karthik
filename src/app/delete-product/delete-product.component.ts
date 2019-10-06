import { Component, OnInit } from '@angular/core';
import { DeleteProductService } from './delete-product.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Globals } from '../globalVaraibles';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  varglobal:Globals
  IDfromView: number
  constructor(private varDIGlobal:Globals,private toastr: ToastrService,private _getdatafromServiceusingDI: DeleteProductService,
    private route: ActivatedRoute, private router: Router) {
      this.varglobal = varDIGlobal
    
     }

  ngOnInit(): void {
    //let customObj2 = new Product();
    this.route.paramMap.forEach((params: Params) => {
    //  this.NameFromView = params.get('productName');
    this.IDfromView=params.get('id')
    console.log(this.IDfromView + " id from here")
    });
    this.deleteProduct()
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  deleteProduct()
  {
    console.log(this.IDfromView + " delete function is hit")
    if(confirm("Are you sure you want to delete the product  ? "))
     {      
      this._getdatafromServiceusingDI.DeleteProductFromDatabase(this.IDfromView).subscribe(
        success =>{  
          // (async () => {
          //   // Do something before delay
          //   console.log('before delay')

          //   await this.delay(3000);
            // this.varDIGlobal.loadDeleteProductButton = false
            // this.varDIGlobal.loadDeletingProductButton = true;
            this.toastr.success('Product deleted Successfully !', ''); this.router.navigate(['/products']);
            // Do something after
            console.log('after delay')
          // })();
        },
        err => console.log("Error in deleting product")  
           
         )
      //this.getDatafromProductsService();
    }
    else{
      this.router.navigate(['/products'])
    }

}}
