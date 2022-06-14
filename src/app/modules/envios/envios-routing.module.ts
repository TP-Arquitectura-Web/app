import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaEnviosComponent } from './consulta-envios/consulta-envios.component';
import { RegistroEnviosComponent } from './registro-envios/registro-envios.component';

const routes: Routes = [
    {
        path: 'consulta-envios',
        component: ConsultaEnviosComponent
    },
    {
        path: 'consulta-envios/:id',
        component: ConsultaEnviosComponent
    },
    {
        path: 'registro-envio',
        component: RegistroEnviosComponent
    },
    {
        path: 'registro-envio/:id',
        component: RegistroEnviosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnviosRoutingModule { }
