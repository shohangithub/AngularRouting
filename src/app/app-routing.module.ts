import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { NotfoundComponent } from './common/component/notfound/notfound.component';
import { ItemModule } from './pos/item/item.module';
debugger
const routes: Routes = [
    //{ path: 'dashboard', component: AppComponent },
    { path: 'pos',loadChildren: ()=> import('./pos/pos-routing.module').then(m=> m.PosRoutingModule)},
    { path: 'item',loadChildren: ()=> import('./pos/pos-routing.module').then(m=> m.PosRoutingModule)},
    // { path: '', component: ItemModule },
    // { path: '**', component: NotfoundComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }