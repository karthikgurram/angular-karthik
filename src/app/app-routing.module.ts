import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductCanDeactivateService } from './add-product/add-product-can-deactivate.service';
import { RegisterCanDeactivateServiceService } from './register/register-can-deactivate-service.service';
import { EditProductcanDeactivateService } from './edit-product/edit-productcan-deactivate.service';
import { CanActivateguardLoginService } from "./login/CanActivateguardLoginService";
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'About', component: AboutComponent },
  {
    path: 'login/register', component: RegisterComponent,
    canDeactivate: [RegisterCanDeactivateServiceService]
  },
  {
    path: 'login/viewUserDetails', component: ViewUserDetailsComponent,
    
  },
  
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'LogOut', component: LogoutComponentComponent },
  { path: 'Home', component: HomepageComponent },
  
  {
    path: 'products/AddProduct', component: AddProductComponent,
    canDeactivate: [AddProductCanDeactivateService], canActivate: [CanActivateguardLoginService]
  },
  {
    path: 'products/AddProduct/null', component: AddProductComponent,
    canDeactivate: [AddProductCanDeactivateService], canActivate: [CanActivateguardLoginService]
  },
  { path: 'products/viewProduct', component: ViewProductComponent },
  {
    path: 'edit', component: EditProductComponent,
    canDeactivate: [EditProductcanDeactivateService]
  },
  {
    path: 'products/view/:id', component: ViewProductComponent,
    canActivate: [CanActivateguardLoginService]
  },
  {
    path: 'products/edit/:id', component: EditProductComponent,
    canActivate: [CanActivateguardLoginService], canDeactivate: [EditProductcanDeactivateService]
  },
  {
    path: 'products/delete/:id', component: DeleteProductComponent,
    canActivate: [CanActivateguardLoginService]
  },
  {
    path: 'products/delete/:id/delete/:id', component: DeleteProductComponent, pathMatch: 'prefix',
    canActivate: [CanActivateguardLoginService]
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
