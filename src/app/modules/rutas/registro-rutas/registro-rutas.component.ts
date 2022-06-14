import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RutasService } from '../services/rutas.service';
import { EnvioService } from '../../envios/services/envios.service';

@Component({
    selector: 'app-registro-rutas',
    templateUrl: './registro-rutas.component.html',
    styleUrls: ['./registro-rutas.component.scss']
})
export class RegistroRutasComponent implements OnInit {
    @ViewChild('rutasNgForm') rutasNgForm: NgForm;
    rutasForm!: FormGroup;
    showAlert: boolean = false;
    txtBtnRuta = 'Agregar Ruta';

    param: any;
    isNew = true;
    envios: any[] = [];

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private rutasService: RutasService, private envioService: EnvioService) { }

    get f(): any {
        return this.rutasForm.controls;
    }

    ngOnInit(): void {
        this.getEnvios();
        this.createRutaForm();

        this.param = this.route.snapshot.params;
        if (Object.keys(this.param).length > 0) {
            this.isNew = false;
            this.txtBtnRuta = 'Editar Ruta'
            this.getRuta(this.param.id);
        }
    }

    getRuta(idRuta: string): void {
        this.rutasService.getRutasById(idRuta).subscribe((ruta) => {
            this.rutasForm.patchValue(ruta.data);
        });
    }

    getEnvios(): void {
        this.envioService.getEnvios().subscribe(response => {
            this.envios = response;
        })
    }

    createRutaForm(): void {
        this.rutasForm = this.fb.group({
            envio: ['', Validators.required],
            driver: ['', Validators.required],
            estado: 'sin programar',
            notas: ''
        });
    }

    crearRuta(): void {
        this.rutasForm.disable();

        if (this.rutasForm.invalid) {
            return;
        }

        const ruta = this.rutasForm.getRawValue();

        if (this.isNew) {
            this.rutasService.postRuta(ruta).subscribe((response: any) => {
                if (response) {
                    this.router.navigateByUrl('rutas/consulta-rutas');
                }
            });
        } else {
            this.rutasService.putRuta(this.param.id, ruta).subscribe((response: any) => {
                if (response) {
                    this.router.navigateByUrl('rutas/consulta-rutas');
                }
            });
        }

    }
}
