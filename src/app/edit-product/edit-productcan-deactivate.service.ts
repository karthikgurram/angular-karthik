import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProductComponent } from './edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class EditProductcanDeactivateService  implements CanDeactivate<EditProductComponent>{

  constructor() { }

  canDeactivate(component:EditProductComponent):boolean
  {
    if (component.varEditForm.dirty && !component.varEditForm.submitted) {
      return confirm('Are you sure you want to discard your changes? ');
    }

    return true;
  }
}
