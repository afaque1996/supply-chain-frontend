import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { DashboardChartsComponent } from './components/dashboard-charts/dashboard-charts.component';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';

@Component({
  standalone: true,
  imports: [CommonModule, DashboardCardsComponent, DashboardChartsComponent, DashboardTableComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { }
