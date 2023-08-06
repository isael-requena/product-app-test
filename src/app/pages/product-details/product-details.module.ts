import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';

import { CartButtonComponent } from '../../components/cart-button/cart-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule
  ],
  declarations: [
    ProductDetailsPage,
    CartButtonComponent
  ]
})
export class ProductDetailsPageModule {}
