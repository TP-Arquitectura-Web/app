import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators'
import { environment } from './../../../../environments/environment';

const API_USERS_URL = `${environment.api}/modules/auth/login`;

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;

    constructor(
        private _httpClient: HttpClient
    ) { }

    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }
    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    login(credentials?: { email: string; password: string }): Observable<any> {
        if (this._authenticated) {
            throwError(() => new Error('El usuario se encuentra logueado'));
        }

        return this._httpClient.post(API_USERS_URL, credentials).pipe(
            catchError(() =>
                of(false)
            ),
            switchMap((response: any) => {
                if (response) {
                    this.accessToken = response.token;
                    this._authenticated = true;
                }

                return of(response);
            }),

        );
    }

    signOut(): Observable<any> {
        localStorage.removeItem('accessToken');
        this._authenticated = false;
        return of(true);
    }

    public getToken(): any {
        try {
            const token = window.localStorage.getItem('accessToken');

            return token;
        } catch (error) {
            return null;
        }
    }
}
