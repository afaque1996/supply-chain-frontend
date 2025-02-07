import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule], 
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  showPassword = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword; 
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      this.authService.login(email, password).subscribe({
        next: (response: { access_token: string; role?: string; modules?: string[] }) => {  // ✅ Allow optional role/modules to prevent errors
          if (response.access_token) {
            console.log('🔒 Token received:', response.access_token); 
            this.authService.saveToken(response.access_token);
  
            // ✅ Store role and modules safely, handling undefined cases
            if (response.role) {
              localStorage.setItem('role', response.role);
            }
            if (response.modules) {
              localStorage.setItem('modules', JSON.stringify(response.modules));
            }
  
            // ✅ Redirect to Module Selection Page
            this.router.navigate(['/module-selection']);
          } else {
            this.errorMessage = 'Invalid login. Please check your credentials.';
          }
        },
        error: () => {
          this.errorMessage = 'Invalid email or password';
        },
      });
    }
  }
  

}
