import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from './../services/auth.service';

@Component({
    selector: 'login',
    styles: [``],
    templateUrl: './login.template.html'
})

export class Login implements OnInit {

    loginForm: FormGroup;

    constructor (private builder: FormBuilder,
                 private authService: AuthService,
                 private router: Router) {
    }

    ngOnInit () {
        this.loginForm = this.builder.group({});
        this.initializeForm();
    }

    initializeForm () {
        this.loginForm = this.builder.group({
            'login': [
                '',
                [
                    Validators.required,
                    Validators.pattern('[A-Za-z]+')
                ]
            ],
            'password': [
                '',
                [
                    Validators.required,
                    Validators.pattern('[A-Za-z0-9]+')
                ],
            ]
        });
    }

    onSubmit () {
        this.authService.logIn(new User(this.loginForm.value.login, this.loginForm.value.password))
            .subscribe( isUserCorrect => {
                if (isUserCorrect) {
                    this.router.navigate(['/courses']);
                } else {
                    this.loginForm.setErrors({ 'wrongLogin': true });
                }
            });
    }
}
