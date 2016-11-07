import { Component } from '@angular/core';
import { CoursesService } from './../services/courses.service';

@Component({
    selector: 'courses',
    providers: [],
    styleUrls: [ './courses.style.css' ],
    templateUrl: './courses.template.html'
})

export class Courses {
    public filter: string = '';

    constructor (private courses: CoursesService) {}

    getFilteredCourses () {
        return this.courses.getAll().filter(course => {
            return course.title.toUpperCase().includes(this.filter.toUpperCase())
                || course.description.toUpperCase().includes(this.filter.toUpperCase());
        });
    }

    deleteCourse (courseId) {
        this.courses.delete(courseId);
    }
}
