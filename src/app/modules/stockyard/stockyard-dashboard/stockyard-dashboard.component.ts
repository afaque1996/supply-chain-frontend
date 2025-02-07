import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockyardService } from '../../../services/stockyard.service'; 
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stockyard-dashboard',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './stockyard-dashboard.component.html',
  styleUrls: ['./stockyard-dashboard.component.scss']
})
export class StockyardDashboardComponent implements OnInit {
  stockyardData$: Observable<any> = of([]);  // ✅ Initialize as empty observable
  vehicleRequests$: Observable<any> = of([]);  // ✅ Initialize as empty observable
  pdiVehicles$: Observable<any> = of([]);  // ✅ Initialize as empty observable

  private stockyardService = inject(StockyardService);

  constructor() {}

  ngOnInit() {
    this.fetchStockyardData();
    this.fetchVehicleRequests();
    this.fetchPdiVehicles();
  }

  fetchStockyardData() {
    this.stockyardData$ = this.stockyardService.getStockyardInventory();
  }

  fetchVehicleRequests() {
    this.vehicleRequests$ = this.stockyardService.getVehicleRequests();
  }

  fetchPdiVehicles() {
    this.pdiVehicles$ = this.stockyardService.getPdiVehicles();
  }

  createVehicleRequest() {
    const requestData = {
      model: 'New Car',
      stockyard: 'Stockyard A',
      status: 'Pending'
    };

    this.stockyardService.createVehicleRequest(requestData).subscribe(() => {
      this.fetchVehicleRequests(); // Refresh requests
    });
  }

  updateRequestStatus(requestId: string, status: string) {
    this.stockyardService.updateRequestStatus(requestId, status).subscribe(() => {
      this.fetchVehicleRequests(); // Refresh requests
    });
  }

  requestStockTransfer() {
    const transferData = {
      from: 'Stockyard A',
      to: 'Stockyard B',
      vehicleId: '123'
    };

    this.stockyardService.requestStockTransfer(transferData).subscribe(() => {
      this.fetchStockyardData(); // Refresh stockyard inventory
    });
  }

  updatePdiStatus(vehicleId: string, status: string) {
    this.stockyardService.updatePdiStatus(vehicleId, status).subscribe(() => {
      this.fetchPdiVehicles(); // Refresh PDI vehicles
    });
  }
}
