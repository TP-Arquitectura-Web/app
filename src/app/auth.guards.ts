import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        @Inject(AuthService) private auth: AuthService,
    ) { }

    public async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        const token = this.auth.getToken();

        const tokenDecode = JSON.parse(atob(token.split('.')[1]));
        if (!this.tokenExpired(tokenDecode)) {
            return true;
        } else {
            return false;
        }
    }

    private tokenExpired(expiration: any) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }





}
