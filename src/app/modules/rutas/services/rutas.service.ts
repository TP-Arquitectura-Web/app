import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RutasService {
    rutasUrl = environment.api + '/modules/rutas/';

    constructor(private _httpClient: HttpClient) { }

    getRutas(): Observable<any> {
        return this._httpClient.get(this.rutasUrl + 'rutas');
    }

    getRutasById(idRuta: string): Observable<any> {
        return this._httpClient.get(this.rutasUrl + 'rutas/' + idRuta);
    }

    postRuta(ruta: any): Observable<any> {
        return this._httpClient.post(this.rutasUrl + 'rutas', ruta);
    }

    putRuta(id: string, ruta: any): Observable<any> {
        return this._httpClient.put(this.rutasUrl + 'rutas/' + id, ruta);
    }
}
