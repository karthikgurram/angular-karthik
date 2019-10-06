import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ProductsServiceService {
  private _productdata = "http://localhost:3000/Productsjson/";

  constructor(private _http: HttpClient) {
  }

  getDatafromJsonServer() {
    return this._http.get(this._productdata)
  }

  DeleteProductFromDatabase(idToDelete: number) {
    return this._http.delete(this._productdata + idToDelete)

  }


}
