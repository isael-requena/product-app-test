import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStyle1Component } from './components/card-style1/card-style1.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CardStyle1Component
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardStyle1Component
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
