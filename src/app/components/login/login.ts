import { Component, inject } from '@angular/core';
import { LoginRequest } from '../../models/login-request';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loading: boolean = false;
  loginForm: FormGroup;


    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
            login: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.onLogin(this.loginForm.value);
        }
    }

    onLogin(credentials: LoginRequest) {
        this.loading = true;
        this.loginForm.disable();
        this.authService.login(credentials).subscribe({
            next: () => {
               // this.loading = false;
                //this.router.navigate(['/']);
                setTimeout(() => {
                    this.loading = false;
                    this.loginForm.enable();
                    this.router.navigate(['/']);
                }, 3000);
            }, // Redirect after login
            error: (err) => {
                setTimeout(() =>
                {
                    this.loading = false;
                    this.loginForm.enable();
                    this.openSnackBar('Credenciais inválidas', 'Fechar')
                    // this.messageService.add({
                    //     severity: 'error',
                    //     summary: 'Falha ao entrar',
                    //     detail: 'Credenciais inválidas',
                    //     life: 5000
                    // });
                }, 3000);
            }
        });
    }

    openSnackBar(message: string, action: string) {
      // this._snackBar.open(message, action);
      // setTimeout(() => {
      //   this._snackBar.dismiss()
      // }, 3000);
    }
}
