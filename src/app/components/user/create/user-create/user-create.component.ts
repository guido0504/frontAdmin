import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../service/login/login';
import { UserLogin } from '../../../../model/user-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../../shared';
import { ToastService } from '../../../../service/toast/toast';

@Component({
  selector: 'app-user-create',
  imports: [...SHARED_IMPORTS],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.createUser();
  }

  createUser() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      roles: [['ADMIN']],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm?.valid) {
      this.loginService.registerUser(this.userForm.value).subscribe({
        next: (res) => {
          this.toastService.showSuccess('Usuario creado correctamente');
        },
        error: (error) => {
          this.toastService.showError(error.error.message);
        },
      });
    }
  }
}
