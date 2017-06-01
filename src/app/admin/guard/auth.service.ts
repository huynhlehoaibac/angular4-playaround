import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { User } from '../login/User';

export class AuthService {
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor() {
        if (localStorage.getItem('isLoggedIn')) {
            this.isLoggedIn = true;
        }
    }

    login(user: User): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        localStorage.removeItem('isLoggedIn');
        this.isLoggedIn = false;
    }
}