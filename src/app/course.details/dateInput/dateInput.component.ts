import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'date-input',
    providers: [],
    styleUrls: [],
    templateUrl: 'dateInput.template.html',
})

export class DateInput implements OnInit {
    @Output () dateChange: EventEmitter<Date> = new EventEmitter<Date>();
    @Input () date: Date;

    private dateString: string = '';

    constructor () {}

    ngOnInit () {
        if (this.date instanceof Date && !isNaN(this.date.valueOf())) {
            this.dateString = (new DatePipe('en-us')).transform(this.date, 'dd.MM.yyyy');
        }
    }

    correctValue (value: string) {
        let pattern = /((0[1-9])|([12]\d)|(3[01]))\.((0[1-9])|(1[012]))\.\d{4}/i;
        let mask: string = '11.11.1111';

        if (isDateValid(value)) {
            this.dateString = value;
        }

        if (value.length === mask.length) {
            this.dateChange.emit(new Date(this.dateString));
        } else {
            this.dateChange.emit(null);
        }

        return this.dateString;

        function isDateValid (value: string): boolean {
            if (value) {
                let temp = value + mask.slice(value.length);
                return pattern.test(temp) && temp.length <= mask.length;
            }
            return true;
        }
    }
}
