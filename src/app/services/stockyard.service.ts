import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockyardService {
  private apiUrl = 'http://localhost:3000/stockyard';  // Backend API URL

  constructor(private http: HttpClient) {}

  // Fetch All Vehicle Requests
  getVehicleRequests(): Observable<any> {
    return this.http.get(`${this.apiUrl}/requests`);
  }

  // Create a New Vehicle Request
  createVehicleRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/requests`, requestData);
  }

  // Update Request Status
  updateRequestStatus(requestId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/requests/${requestId}`, { status });
  }

  // Fetch Stockyard Inventory
  getStockyardInventory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/inventory`);
  }

  // Request Stock Transfer Between Stockyards
  requestStockTransfer(transferData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfers`, transferData);
  }

  // Fetch PDI Vehicles
  getPdiVehicles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pdi`);
  }

  // Update PDI Status
  updatePdiStatus(vehicleId: string, status: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/pdi/${vehicleId}`, { status });
  }
}
