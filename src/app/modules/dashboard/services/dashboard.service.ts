import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DashboardService {
    dashboardUrl = environment.api + '/modules/dashboard/';

    constructor(private _httpClient: HttpClient) { }

   
}
