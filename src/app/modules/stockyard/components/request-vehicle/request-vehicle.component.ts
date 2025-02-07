import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-request-vehicle',
  templateUrl: './request-vehicle.component.html',
  styleUrls: ['./request-vehicle.component.scss']
})
export class RequestVehicleComponent {
  isRequestModalOpen = false;
  vehicleModel = '';
  quantity: number = 1;
  selectedStockyard = '';

  // Example Data
  vehicleModels = ['Coolray', 'Emgrand', 'Azkarra', 'Okavango'];
  stockyards = ['Stockyard A', 'Stockyard B', 'Stockyard C'];

  // Requests List
  requests = [
    { model: 'Coolray', quantity: 5, stockyard: 'Stockyard A', status: 'Pending' },
    { model: 'Emgrand', quantity: 10, stockyard: 'Stockyard B', status: 'In Transit' },
    { model: 'Okavango', quantity: 3, stockyard: 'Stockyard C', status: 'Delivered' },
  ];

  openRequestModal() {
    this.isRequestModalOpen = true;
  }

  closeRequestModal() {
    this.isRequestModalOpen = false;
  }

  submitRequest() {
    if (!this.vehicleModel || !this.quantity || !this.selectedStockyard) {
      alert('Please fill all fields');
      return;
    }

    // Add new request
    this.requests.push({
      model: this.vehicleModel,
      quantity: this.quantity,
      stockyard: this.selectedStockyard,
      status: 'Pending'
    });

    // Reset Form & Close Modal
    this.vehicleModel = '';
    this.quantity = 1;
    this.selectedStockyard = '';
    this.isRequestModalOpen = false;
  }
}
