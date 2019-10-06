import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProductsServiceService } from './products/products-service.service';
import { CommonModule } from '@angular/common';  



import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductServiceService } from './add-product/add-product-service.service';
import { RegistrationServiceService } from './register/registration-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductServiceService } from './view-product/view-product-service.service';
import { AddProductCanDeactivateService } from './add-product/add-product-can-deactivate.service';
import { RegisterCanDeactivateServiceService } from './register/register-can-deactivate-service.service';
import { EditProductcanDeactivateService } from './edit-product/edit-productcan-deactivate.service';
import { LoginUserService } from './login/login-user.service';
import { CanActivateguardLoginService } from "./login/CanActivateguardLoginService";
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { RouterStateSnapshot } from '@angular/router';

import { DeleteProductComponent } from './delete-product/delete-product.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { Globals } from './globalVaraibles';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductComponent,
    PageNotFoundComponent,
    AlertComponentComponent,
    
    DeleteProductComponent,
    
    LogoutComponentComponent,
    
    ViewUserDetailsComponent,
    
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
	ToastrModule.forRoot({
    positionClass: 'toast-bottom-right'
  })
  ],
  providers: [ProductsServiceService,
    AddProductServiceService,
    RegistrationServiceService,
    ViewProductServiceService,
    AddProductCanDeactivateService,
    RegisterCanDeactivateServiceService,
    EditProductcanDeactivateService,
    LoginUserService,
    CanActivateguardLoginService,
    LoginComponent,
     Globals 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
