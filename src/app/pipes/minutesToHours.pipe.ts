import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'minutesToHours'
})

export class MinutesToHoursPipe implements PipeTransform {
    transform (value: number): string {
        let minutes = Math.floor(value % 60);
        let hours = Math.floor(value / 60);
        let leadingZero = (minutes < 10) ? '0' : '';
        return hours + 'h ' + leadingZero + minutes + 'min';
    }
}
