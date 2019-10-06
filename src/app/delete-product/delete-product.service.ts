import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {

  private _productdata = "http://localhost:3000/Productsjson/";

  constructor(private _http: HttpClient) {
  }

  DeleteProductFromDatabase(idToDelete: number) {
    return this._http.delete(this._productdata + idToDelete)

  }
}
