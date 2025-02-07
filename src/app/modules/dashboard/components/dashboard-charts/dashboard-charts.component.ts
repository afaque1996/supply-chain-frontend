import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';  
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  standalone: true,
  imports: [CommonModule, BaseChartDirective], 
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent {
  
  // 🚗 Stock Distribution Pie Chart Data
  public stockChartLabels: string[] = ['In Stock', 'In Transit', 'Sold'];
  public stockChartData: ChartData<'pie'> = {
    labels: this.stockChartLabels,
    datasets: [{
      data: [320, 150, 500], // Example data
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
    }]
  };
  public stockChartType: ChartType = 'pie';

  // 📈 Orders Trend Line Chart
  public ordersChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public ordersChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  public ordersChartData: ChartData<'line'> = {
    labels: this.ordersChartLabels,
    datasets: [
      { data: [50, 70, 100, 120, 90, 110], label: 'Orders Completed', borderColor: '#36A2EB', fill: true }
    ]
  };
  public ordersChartType: ChartType = 'line';
}
