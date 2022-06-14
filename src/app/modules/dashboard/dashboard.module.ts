import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboarRoutingModule } from './dashboard-routing.module';
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
import { MatCardModule } from '@angular/material/card';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { EnvioService } from '../envios/services/envios.service';
import { RutasService } from '../rutas/services/rutas.service';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboarRoutingModule,
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
        CommonModule,
        MatCardModule
    ],
    exports: [
        MatSortModule,
        CommonModule
    ],
    providers: [DashboardService, EnvioService, RutasService],
})
export class DashboardModule { }
