import { Routes, RouterModule } from '@angular/router';
import { Courses } from './courses';
import { CourseDetails } from './course.details';
import { Login } from './login';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
    { path: '',             component: Courses },
    { path: 'courses',      component: Courses },
    { path: 'courses/:id',  component: CourseDetails },
    { path: 'login',        component: Login },
    { path: '**',           component: NoContent },
];
