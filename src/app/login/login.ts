import { Component } from '@angular/core';
import { LoginService } from '../service/login/login';
import { SHARED_IMPORTS } from '../shared';
import { ToastService } from '../service/toast/toast';
import { Ripple } from 'primeng/ripple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...SHARED_IMPORTS, Ripple],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private readonly loginService: LoginService,
    private toastService: ToastService,
    private router: Router
  ) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.loginService.guardarToken(res.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.toastService.showError(err.error.message);
      },
    });
  }
}
