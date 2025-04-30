import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIM Order';

  constructor(public authService: AuthService) {}

  logout(): void {
    localStorage.removeItem('token');
    window.location.reload(); // Refresh to update UI
  }
}