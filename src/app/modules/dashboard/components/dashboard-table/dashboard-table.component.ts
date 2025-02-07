import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent {
  transactions = [
    { id: 'ORD001', type: 'Stock Transfer', status: 'Completed', date: '2024-02-01' },
    { id: 'ORD002', type: 'Vehicle Sold', status: 'Pending', date: '2024-02-03' },
    { id: 'ORD003', type: 'Stock Arrival', status: 'Processing', date: '2024-02-05' },
    { id: 'ORD004', type: 'Stock Transfer', status: 'Completed', date: '2024-02-06' },
  ];
}
