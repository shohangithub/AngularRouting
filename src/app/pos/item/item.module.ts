import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';


@NgModule({
  declarations: [
    ItemRoutingModule.components
  ],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { 
  static item =ItemRoutingModule.components;
}
