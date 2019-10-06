import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {

  private _productdata = "http://localhost:3000/Productsjson";

  constructor(private _http: HttpClient) {
  }

  getDatafromsdaJsonServer() {
    return this._http.get(this._productdata)
  }


  
  AddDataTojsonServer(VarProduct: Product) {
    return this._http.post(this._productdata, VarProduct)

  }


}
