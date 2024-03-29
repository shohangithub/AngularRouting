import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../common/component/notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { ItemModule } from './item/item.module';
debugger
const routes: Routes = [
  //{path:'pos/item', loadChildren: ()=> import('./item/item.module').then(m=>m.ItemModule)},
  {path:'pos', component: DashboardComponent,pathMatch:'full',
  children:[
    {path:'item', component: ItemComponent,pathMatch:'full'}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ItemModule
  ],
  exports: [ItemModule,RouterModule]
})
export class PosRoutingModule {}
