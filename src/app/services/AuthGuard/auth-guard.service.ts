import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import {FirebaseService} from '../firebase/firebase.service';
import { AngularFire,FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGaurdService implements CanActivate {
constructor(public auth : FirebaseAuth, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.auth
      .take(1)
      .map((authState: FirebaseAuthState) => !!authState)
      .do(authenticated => {
        if (!authenticated) this.router.navigate(['']);
      });
  }
}
