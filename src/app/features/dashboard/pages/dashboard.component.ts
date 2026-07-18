import { Chart } from 'chart.js';
import { ChartItem, Dashboard } from '../models/dashboard.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
    @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;

    isLoading = false;
    dashboardData!: Dashboard;

    private doughnutChart!: Chart;
    private barChart!: Chart;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.getDashboard();
    }

    private getDashboard(): void {
        this.isLoading = true;

        this.dashboardService
            .getDashboard()
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe({
                next: (res) => {
                    this.dashboardData = res;
                    setTimeout(() => this.renderCharts());
                },
            });
    }

    private renderCharts(): void {
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: this.dashboardData.chartDonut.map((chart: ChartItem) => chart.name),
                datasets: [
                    {
                        data: this.dashboardData.chartDonut.map((chart: ChartItem) => chart.value),
                        backgroundColor: ['#d4d4d4', '#b8b8b8', '#a3a3a3', '#8f8f8f'],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                cutout: '60%',
            },
        });

        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.dashboardData.chartBar.map((chart: ChartItem) => chart.name),
                datasets: [
                    {
                        data: this.dashboardData.chartBar.map((chart: ChartItem) => chart.value),
                        backgroundColor: '#a3a3a3',
                        borderRadius: 2,
                        barPercentage: 0.5,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    },
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                        border: {
                            display: true,
                        },
                    },
                },
            },
        });
    }
}
