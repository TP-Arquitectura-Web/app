import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RutasService } from '../services/rutas.service';

@Component({
    selector: 'app-consulta-rutas',
    templateUrl: './consulta-rutas.component.html',
    styleUrls: ['consulta-rutas.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultaRutasComponent implements OnInit {
    @ViewChild('rutasTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;

    data: any;
    rutasDataSource: MatTableDataSource<any> = new MatTableDataSource();
    rutasTableColumns: string[] = ['driver', 'estado', 'notas', 'acciones'];

    constructor(private router: Router, private rutasService: RutasService) {
    }

    ngOnInit(): void {
        this.getRutas();
    }

    getRutas(): void {
        this.rutasService.getRutas().subscribe((data) => {
            this.rutasDataSource.data = data;
        });
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    editarRuta(ruta: any): void {
        this.router.navigate(['rutas/registro-rutas', ruta.id]);
    }

}
