import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {
    static LOGIN_KEY: string = 'login';

    static CORRECT_LOGIN: string = 'q';
    static CORRECT_PASSWORD: string = 'q';

    constructor () {}

    logIn (userLogin: string, userPassword: string): Observable <User> {
        return Observable.create( observer => {

            setTimeout(() => {
                var user: User = null;
                if (userLogin === AuthService.CORRECT_LOGIN &&
                    userPassword === AuthService.CORRECT_PASSWORD) {
                    localStorage.setItem(AuthService.LOGIN_KEY, userLogin);
                    user = new User();
                }
                observer.next(user);
            }, 500);

        });
    }

    isLoggedIn () {
        return !!localStorage.getItem(AuthService.LOGIN_KEY);
    }

    logOff () {
        localStorage.removeItem(AuthService.LOGIN_KEY);
    }
}

export class User {
    public login: string;
    constructor () {}
}
