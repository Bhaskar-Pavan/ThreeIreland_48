import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimOrderService {
  private apiUrl = `${environment.apiBaseUrl}/sim-order`;

  constructor(private http: HttpClient) {}

  orderSim(orderData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(this.apiUrl, orderData, { headers });
  }
}