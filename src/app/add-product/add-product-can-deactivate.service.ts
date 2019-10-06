import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddProductComponent } from './add-product.component';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AddProductCanDeactivateService implements CanDeactivate<AddProductComponent> {

  constructor() { }

  canDeactivate(component: AddProductComponent): boolean {
    if (component.f.dirty && !component.f.submitted ) {
      return confirm('Are you sure you want to discard your changes? ');
    }


    return true;
    }
}
