import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-luisparada';
  isAutheticated = false;

  isLoggedIn: Observable<boolean>;

  constructor(private router: Router, public auth: AuthService, private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
