import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnvioService } from '../services/envios.service';

@Component({
    selector: 'app-consulta-envios',
    templateUrl: './consulta-envios.component.html',
    styleUrls: ['consulta-envios.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultaEnviosComponent implements OnInit {
    @ViewChild('enviosTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;

    data: any;
    enviosDataSource: MatTableDataSource<any> = new MatTableDataSource();
    enviosTableColumns: string[] = ['nroEnvio', 'servicio', 'datosRetiro', 'datosEntrega', 'acciones'];

    constructor(private router: Router, private envioService: EnvioService) {
    }

    ngOnInit(): void {
        this.getEnvios();
    }

    getEnvios(): void {
        this.envioService.getEnvios().subscribe((data) => {
            this.enviosDataSource.data = data;
        });
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    editarEnvio(envio: any): void {
        debugger
        this.router.navigate(['envios/registro-envio', envio.id]);
    }

}
