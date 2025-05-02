import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimOrderComponent } from './components/sim-order/sim-order.component';

const routes: Routes = [
  { path: 'sim-order', component: SimOrderComponent },
  { path: '', redirectTo: '/sim-order', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }