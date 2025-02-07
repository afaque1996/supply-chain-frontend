import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-selection',
  standalone: true,
  templateUrl: './module-selection.component.html',
  styleUrls: ['./module-selection.component.scss'],
  imports: [CommonModule], 
})
export class ModuleSelectionComponent {
  userRole: string | null = localStorage.getItem('role');

  modules = [
    { name: 'Dashboard', route: '/dashboard', icon: 'dashboard', roles: ['admin', 'manager'] },
    { name: 'Stockyard', route: '/stockyard', icon: 'warehouse', roles: ['admin', 'manager'] },
    { name: 'Transportation', route: '/transportation', icon: 'local_shipping', roles: ['admin'] },
    { name: 'PDI', route: '/pdi', icon: 'check_circle', roles: ['admin', 'manager', 'staff'] },
    { name: 'Sales', route: '/sales', icon: 'shopping_cart', roles: ['admin', 'manager'] }
  ];

  constructor(private router: Router) {}

  getAccessibleModules() {
    return this.modules.filter(module => module.roles.includes(this.userRole || ''));
  }

  navigateToModule(route: string) {
    this.router.navigate([route]);
  }
}
