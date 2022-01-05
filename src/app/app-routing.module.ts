import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-dashboard/admin/admin.component';

const routes: Routes = [

  {
    path: 'LandingPage',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'LandingPage',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
