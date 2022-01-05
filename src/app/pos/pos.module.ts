import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//PosRoutingModule.components
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PosRoutingModule
  ],
  bootstrap: [DashboardComponent]
})
export class PosModule { }
