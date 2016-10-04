import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthService {
    static LOGIN_KEY: string = 'login';

    static CORRECT_LOGIN: string = 'q';
    static CORRECT_PASSWORD: string = 'q';

    constructor () {}

    logIn (user: User): Observable <boolean> {
        return Observable.create( observer => {

            setTimeout(() => {
                let isLoginCorrect = (user.login === AuthService.CORRECT_LOGIN &&
                                      user.password === AuthService.CORRECT_PASSWORD);
                if (isLoginCorrect) {
                    localStorage.setItem(AuthService.LOGIN_KEY, user.login);
                }
                observer.next(isLoginCorrect);
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
    constructor (public login: string,
                 public password: string) {}
}
