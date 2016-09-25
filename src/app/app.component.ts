import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `
        <header>
            <span>Header</span>
        </header>

        <nav>
            <span>
                <a [routerLink]=" ['./'] ">
                    Home
                </a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./courses'] ">
                    Courses
                </a>
            </span>
            |
            <span>
                <a [routerLink]=" ['./login'] ">
                    Login
                </a>
            </span>
        </nav>

        <main>
            <router-outlet></router-outlet>
        </main>

        <footer>
            <span>Footer</span>
        </footer>
    `
})

export class App {

}
