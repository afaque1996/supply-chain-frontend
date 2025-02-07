import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent {
  stats = [
    { title: 'Total Cars', value: 520, icon: '🚗' },
    { title: 'Pending Orders', value: 25, icon: '📦' },
    { title: 'In-Transit Vehicles', value: 12, icon: '🚛' },
    { title: 'Delivered', value: 480, icon: '🏁' },
  ];
}
