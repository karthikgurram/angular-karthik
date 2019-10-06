import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/product';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ViewProductServiceService {

  constructor(private _varhttp: HttpClient) { }

  private _varURL="http://localhost:3000/Productsjson/"

  ViewIndividualProduct(id :number) {
    console.log(this._varURL+id)
    return this._varhttp.get(this._varURL+id)

  }

  EditDatainJsonServer(id :number, VarProduct: Product) {
    return this._varhttp.put(this._varURL+id, VarProduct)
  }

  
  // AddDataTojsonServer(VarProduct: Product) {
  //   return this._http.post(this._varURL+id, VarProduct)

  // }

}
