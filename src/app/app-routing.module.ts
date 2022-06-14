import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'envios', canActivate: [AuthGuard], loadChildren: () => import('./modules/envios/envios.module').then(m => m.EnviosModule) },
  { path: 'rutas', canActivate: [AuthGuard], loadChildren: () => import('./modules/rutas/rutas.module').then(m => m.RutasModule) },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
