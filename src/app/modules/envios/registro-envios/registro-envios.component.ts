import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Servicio } from './../models/Servicio.model';
import { EnvioService } from '../services/envios.service';

@Component({
    selector: 'app-registro-envios',
    templateUrl: './registro-envios.component.html',
    styleUrls: ['./registro-envios.component.scss']
})
export class RegistroEnviosComponent implements OnInit {
    @ViewChild('enviosNgForm') enviosNgForm: NgForm;
    enviosForm!: FormGroup;
    showAlert: boolean = false;
    txtBtnENvio = 'Agregar Envío';

    servicios: Servicio[] = [
        { id: 'sameDay', nombre: 'Same Day' },
        { id: '24', nombre: '24 Hs.' },
        { id: '48', nombre: '48 Hs.' },
    ];

    param: any;
    isNew = true;

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private envioService: EnvioService) { }

    get f(): any {
        return this.enviosForm.controls;
    }

    ngOnInit(): void {
        this.createEnvioForm();

        this.param = this.route.snapshot.params;
        if (Object.keys(this.param).length > 0) {
            this.isNew = false;
            this.txtBtnENvio = 'Editar Envío'
            this.getEnvio(this.param.id);
        }
    }

    getEnvio(idEnvio: string): void {
        this.envioService.getEnvioById(idEnvio).subscribe((envio) => {
            this.enviosForm.patchValue(envio.data);
        });
    }

    createEnvioForm(): void {
        this.enviosForm = this.fb.group({
            retiro: this.fb.group({
                nombreRetiro: ['', Validators.required],
                apellidoRetiro: ['', Validators.required],
                direccionRetiro: ['', Validators.required],
                emailRetiro: ['', Validators.required],
                telefonoRetiro: [
                    '',
                    [Validators.required, Validators.pattern(/^[1-3][0-9]{9}$/)],
                ],
                notasRetiro: ['']
            }),
            entrega: this.fb.group({
                nombreEntrega: ['', Validators.required],
                apellidoEntrega: ['', Validators.required],
                direccionEntrega: ['', Validators.required],
                emailEntrega: ['', Validators.required],
                telefonoEntrega: [
                    '',
                    [Validators.required, Validators.pattern(/^[1-3][0-9]{9}$/)],
                ],
                notasEntrega: ['']
            }),
            servicio: ['', Validators.required],
            estado: 'sin programar',
        });
    }

    crearEnvio(): void {
        this.enviosForm.disable();

        if (this.enviosForm.invalid) {
            return;
        }

        const envio = this.enviosForm.getRawValue();

        if (this.isNew) {
            this.envioService.postEnvio(envio).subscribe((response: any) => {
                if (response) {
                    this.router.navigateByUrl('envios/consulta-envios');
                }
            });
        } else {
            this.envioService.putEnvio(this.param.id, envio).subscribe((response: any) => {
                if (response) {
                    this.router.navigateByUrl('envios/consulta-envios');
                }
            });
        }

    }
}
