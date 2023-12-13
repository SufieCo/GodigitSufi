import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, { path: 'bike', loadChildren: () => import('./bike/bike.module').then(m => m.BikeModule) }, { path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
