import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';
import { EnvioService } from '../envios/services/envios.service';
import { RutasService } from '../rutas/services/rutas.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
    totalEnvios: number;
    totalRutas: number;

    constructor(private cdr: ChangeDetectorRef, private enviosService: EnvioService, private rutasService: RutasService) {
    }

    ngOnInit(): void {
        this.getEnvios();
        this.getRutas();
    }

    getEnvios() {
        this.enviosService.getEnvios().subscribe(res => {
            this.totalEnvios = res.length;
            this.cdr.detectChanges();
        })
    }

    getRutas() {
        this.rutasService.getRutas().subscribe(res => {
            this.totalRutas = res.length;
            this.cdr.detectChanges();
        })
    }

}
