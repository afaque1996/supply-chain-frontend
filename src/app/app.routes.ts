import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ModuleSelectionComponent } from './modules/module-selection/module-selection.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'module-selection', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'module-selection', component: ModuleSelectionComponent, canActivate: [AuthGuard] },

  // 🔹 Stockyard Module with Nested Routes
  { 
    path: 'stockyard', 
    loadComponent: () => import('./modules/stockyard/stockyard.component').then(m => m.StockyardComponent), 
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default to dashboard
      { path: 'dashboard', loadComponent: () => import('./modules/stockyard/stockyard-dashboard/stockyard-dashboard.component').then(m => m.StockyardDashboardComponent) },
      { path: 'requests', loadComponent: () => import('./modules/stockyard/components/request-vehicle/request-vehicle.component').then(m => m.RequestVehicleComponent) },
      { path: 'pdi', loadComponent: () => import('./modules/stockyard/components/pdi/pdi.component').then(m => m.PdiComponent) }
    ]
  },

  // 🔹 Other Modules (Lazy Loaded)
  { path: 'transportation', loadComponent: () => import('./modules/transportation/transportation.component').then(m => m.TransportationComponent), canActivate: [AuthGuard] },
  { path: 'pdi', loadComponent: () => import('./modules/pdi/pdi.component').then(m => m.PdiComponent), canActivate: [AuthGuard] },
  { path: 'sales', loadComponent: () => import('./modules/sales/sales.component').then(m => m.SalesComponent), canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' }, 
];

export const appRouting = provideRouter(routes);
