import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductHomeComponent } from './product-home/product-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductHomeComponent, children: [
    {path: '', component: ProductListComponent},
    {path: 'edit/:id', component: EditProductComponent}]},
  {path: 'products/new', component: NewProductComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
