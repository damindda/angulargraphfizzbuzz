import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import ('./modules/dashboard/dashboard.module').then((module)=> module.DashboardModule)
  },
  {
    path: 'fizzbuzz',
    loadChildren: () => import ('./modules/fizzbuzz/fizzbuzz.module').then((module)=> module.FizzbuzzModule)
  },
  {
    path: 'factorial',
    loadChildren: () => import ('./modules/factorial/factorial.module').then((module)=> module.FactorialModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
