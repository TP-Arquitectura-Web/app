import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EnvioService {
    enviosUrl = environment.api + '/modules/envios/';

    constructor(private _httpClient: HttpClient) { }

    getEnvios(): Observable<any> {
        return this._httpClient.get(this.enviosUrl + 'envios');
    }

    getEnvioById(idEnvio: string): Observable<any> {
        return this._httpClient.get(this.enviosUrl + 'envios/' + idEnvio);
    }

    postEnvio(envio: any): Observable<any> {
        return this._httpClient.post(this.enviosUrl + 'envios', envio);
    }

    putEnvio(id: string, envio: any): Observable<any> {
        return this._httpClient.put(this.enviosUrl + 'envios/' + id, envio);
    }
}
