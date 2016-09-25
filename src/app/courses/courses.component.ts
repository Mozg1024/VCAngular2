import { Component } from '@angular/core';

@Component({
    selector: 'courses',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: [ './courses.style.css' ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './courses.template.html'
})

export class Courses {

}
