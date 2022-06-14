import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RutasRoutingModule } from './rutas-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ConsultaRutasComponent } from './consulta-rutas/consulta-rutas.component';
import { RegistroRutasComponent } from './registro-rutas/registro-rutas.component';
import { RutasService } from './services/rutas.service';
import { EnvioService } from '../envios/services/envios.service';

@NgModule({
    declarations: [
        ConsultaRutasComponent,
        RegistroRutasComponent
    ],
    imports: [
        RutasRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatChipsModule,
        MatRippleModule,
        MatExpansionModule,
        MatSelectModule,
        MatSnackBarModule,
        MatSortModule,
        MatMenuModule,
        MatTabsModule,
        MatDialogModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatTooltipModule,
        CommonModule
    ],
    exports: [
        MatSortModule,
        CommonModule
    ],
    providers: [RutasService, EnvioService],
})
export class RutasModule { }
