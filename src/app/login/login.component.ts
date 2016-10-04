import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService, User } from './../services/auth.service';

@Component({
    selector: 'login',
    styles: [``],
    templateUrl: './login.template.html'
})

export class Login implements OnInit {

    loginForm: FormGroup;
    user: User;

    constructor (private builder: FormBuilder) {
    }

    ngOnInit () {
        this.user = new User();
        this.loginForm = this.builder.group({});

        this.initializeForm();
    }

    initializeForm () {
        this.loginForm = this.builder.group({
            'login': [
                this.user.login,
                [
                    Validators.required,
                    Validators.pattern('[A-Za-z]+')
                ]
            ],
            'password': [
                this.user.password,
                [
                    Validators.required,
                    Validators.pattern('[A-Za-z0-9]+')
                ],
            ]
        });
    }
}
