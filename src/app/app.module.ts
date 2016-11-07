import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { Courses } from './courses';
import { CourseDetails } from './course.details';
import { DateInput } from './course.details/dateInput/dateInput.component';
import { Login } from './login';
import { NoContent } from './no-content';

import { AuthService } from './services/auth.service';
import { CoursesService } from './services/courses.service';

import { MinutesToHoursPipe } from './pipes/minutesToHours.pipe';
import { HighlightTextDirective } from './directives/highlightText.directive';


// Application wide providers
const APP_PROVIDERS = [
    AuthService,
    CoursesService
];

@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        Courses,
        CourseDetails,
        DateInput,
        Login,
        NoContent,
        MinutesToHoursPipe,
        HighlightTextDirective
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        ReactiveFormsModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS,
    ]
})

export class AppModule {

}
