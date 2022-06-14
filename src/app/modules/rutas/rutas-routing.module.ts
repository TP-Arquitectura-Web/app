import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaRutasComponent } from './consulta-rutas/consulta-rutas.component';
import { RegistroRutasComponent } from './registro-rutas/registro-rutas.component';

const routes: Routes = [
    {
        path: 'consulta-rutas',
        component: ConsultaRutasComponent
    },
    {
        path: 'consulta-rutas/:id',
        component: ConsultaRutasComponent
    },
    {
        path: 'registro-rutas',
        component: RegistroRutasComponent
    },
    {
        path: 'registro-rutas/:id',
        component: RegistroRutasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RutasRoutingModule { }
