import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardModule } from './views/dashboard/dashboard.module';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => DashboardModule),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
