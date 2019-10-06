import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from './register.component';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RegisterCanDeactivateServiceService implements CanDeactivate<RegisterComponent> {

  constructor() { }

  canDeactivate(component: RegisterComponent): boolean {

    if (component.varRegisterForm.dirty && !component.varRegisterForm.submitted) {
      return confirm('Are you sure you want to discard your changes? ');
    }
        return true;
  }

}
