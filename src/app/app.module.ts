import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
import { HTTP_INTERCEPTORS_PROVIDERS } from './core/services/http-interceptors/http-interceptors';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

Chart.register(...registerables);

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, HttpClientModule],
    providers: [HTTP_INTERCEPTORS_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule {}
