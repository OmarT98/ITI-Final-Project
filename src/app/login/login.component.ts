import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { url } from 'node:inspector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  wl1: string = 'assets/images/wl1.png';
  logo: string = 'assets/images/logo2.png';
  lastlogo: string = 'assets/images/lastlogo.png';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Ensure both fields are filled out
    if (!this.username || !this.password) {
      alert('Please enter both username and password');
      return;
    }

    // Attempt to log in via AuthService
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']); // Redirect to product list after successful login
    } else {
      alert('Login failed! Please check your credentials.');
      this.resetForm(); // Clear form if login fails
    }
  }

  resetForm() {
    this.username = '';
    this.password = ''; // Clear form fields on failure
  }
}
