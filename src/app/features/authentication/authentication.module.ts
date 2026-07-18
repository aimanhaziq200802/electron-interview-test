import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [LoginComponent],
})
export class AuthenticationModule {}
