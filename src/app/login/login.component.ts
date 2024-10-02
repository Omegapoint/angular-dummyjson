import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(): void {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    // Make the HTTP POST request to the DummyJSON API
    this.http.post('https://dummyjson.com/auth/login', loginData).subscribe(
      (response: any) => {
        const navigationExtras: NavigationExtras = {
          state: {
            user: response, // Pass user data in the router state
          },
        };
        // Navigate to home and pass user data
        this.router.navigate(['/home'], navigationExtras);
      },
      (error) => {
        this.errorMessage = 'Login failed. Please try again.';
      },
    );
  }
}
