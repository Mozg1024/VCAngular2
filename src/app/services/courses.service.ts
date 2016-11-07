import { Injectable } from '@angular/core';

@Injectable()

export class CoursesService {
    private loremIpsum = 'Lorem ipsum dolor sit amet. Consectetur, adipisci velit, ' +
        'sed ut perspiciatis, unde omnis dolor. Maiores alias consequatur ' +
        'aut rerum necessitatibus. Itaque earum rerum facilis est et iusto. ' +
        'Vero eos et dolorum fuga necessitatibus saepe eveniet.';

    private courses: Array<Course> = [
        new Course(new Date('10/12/2014'), 327, 'First Course', this.loremIpsum, ['Pushkin', 'Lermontov', 'Dostoevskiy']),
        new Course(new Date('5/22/2015'), 654, 'Second Course', this.loremIpsum, ['Pelevin', 'Sorokin', 'Perumov']),
        new Course(new Date('01/21/2016'), 151, 'Third Course', this.loremIpsum, ['Pelevin', 'Markes', 'Ekzupery', 'Remark'])
    ];

    constructor () {}

    getAuthors () {
        var allAuthors = [];

        for (var { authors: authors } of this.courses) {
            for (var author of authors) {
                allAuthors[author] = author;
            }
        }

        return Object.keys(allAuthors);
    };

    getAll (): Array<Course>  {
        return this.courses.map(course => Object.assign({}, course));
    };

    get (courseId) {
        return Object.assign({}, this.courses.filter(course => course.id == courseId)[0]);
    };

    delete (courseId):boolean {
        let index = this.courses.findIndex(course => course.id == courseId);
        if (index >= 0) {
            this.courses.splice(index, 1);
            return true;
        }
        return false;
    };
}

var counter = 0;

export class Course {
    public id: number;

    constructor (public date: Date,
                 public length: number,
                 public title: string,
                 public description: string,
                 public authors: Array<string>) {
        this.id = counter++;
    }
}
