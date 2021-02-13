import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemRoutingModule } from './item/item-routing.module';

//PosRoutingModule.components
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
