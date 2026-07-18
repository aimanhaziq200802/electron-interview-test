import { AuthService } from '../../services/authencation.service';
import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { LoginModel } from '../../models/authentication.model';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    isLoading = false;
    loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    constructor(
        private authService: AuthService,
        private formBuilder: NonNullableFormBuilder,
        private router: Router,
        private storageService: StorageService,
    ) {}

    onSubmit(): void {
        if (this.loginForm.invalid) {
            alert('Please enter username and password');
            return;
        }

        const payload: LoginModel = {
            username: this.loginForm.value.username!,
            password: this.loginForm.value.password!,
        };

        this.isLoading = true;

        this.authService
            .login(payload)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe({
                next: (res) => {
                    this.loginForm.reset();
                    this.storageService.setFromLogin(res);
                    this.router.navigate(['dashboard']);
                },
                error: () => {
                    alert('Invalid username or password');
                },
            });
    }
}
