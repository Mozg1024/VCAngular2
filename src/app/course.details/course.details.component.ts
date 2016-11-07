import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { CoursesService, Course } from './../services/courses.service';

@Component({
    selector: 'course-details',
    providers: [],
    styleUrls: ['./course.details.style.css'],
    templateUrl: './course.details.template.html'
})

export class CourseDetails implements OnInit, OnDestroy {
    private sub: Subscription;
    public course: Course;
    public selectedPossibleAuthors: Array<string> = [];
    public selectedCurrentAuthors: Array<string> = [];

    constructor (private courses: CoursesService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit () {
        this.sub = this.activatedRoute.params
            .subscribe(params => {
                if (params['id'] === 'new') {
                    this.course = new Course(new Date(), 0, '', '', []);
                } else {
                    let courseId = params['id'];
                    this.course = this.courses.get(courseId);
                }
            });
    }

    ngOnDestroy () {
        this.sub.unsubscribe();
    }

    onSubmit () {
    }

    cancel () {

    }

    getAddedAuthors () {
        return this.course.authors;
    }

    getPossibleAuthors () {
        let possibleAuthors = {};

        for (var author of this.courses.getAuthors()) {
            possibleAuthors[author] = author;
        }
        for (var author of this.getAddedAuthors()) {
            delete possibleAuthors[author];
        }

        return Object.keys(possibleAuthors);
    }

    addAuthors () {
        this.course.authors.push(...this.selectedPossibleAuthors);
        this.selectedPossibleAuthors = [];
    }

    removeAuthors () {
        this.course.authors = this.course.authors.filter(author => !this.selectedCurrentAuthors.includes(author));
        this.selectedCurrentAuthors = [];
    }
}
