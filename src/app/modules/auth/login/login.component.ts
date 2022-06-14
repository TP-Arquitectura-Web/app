import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    hasError = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private fb: FormBuilder,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    submit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        // Disable the form
        this.loginForm.disable();

        // Hide the alert
        // this.showAlert = false;
debugger
        this._authService.login(this.loginForm.value)
            .subscribe((user: any) => {
                if (user) {
                    const redirectURL = '/envios/consulta-envios';
                    this._router.navigateByUrl(redirectURL);
                } else {
                    this.loginForm.enable();

                    // this.showAlert = true;
                    // this.alert = {
                    //     type: 'error',
                    //     message: 'Usuario o Password incorrecto'
                    // };
                }
            });

    }
}
