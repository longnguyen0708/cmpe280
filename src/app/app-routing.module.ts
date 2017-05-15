import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ItemsComponent }      from './items/items.component';
import { ItemDetailComponent }  from './item-detail/item-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CartComponent }  from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'items',     component: ItemsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cart', component: CartComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
