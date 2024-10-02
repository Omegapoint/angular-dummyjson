import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule, // Material Button
    MatToolbarModule,
    MatTabsModule,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dummyjson';
  selectedIndex = 0;

  constructor(private router: Router) {}

  onLoginSuccess(): void {
    this.selectedIndex = 1; // Change to the Home tab
    this.router.navigate(['/home']); // Navigate to Home
  }
}
