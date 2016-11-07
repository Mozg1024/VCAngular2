import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[highlightText]'
})

export class HighlightTextDirective {
    constructor (private element: ElementRef) {}

    @Input() set highlightText (text: string) {
        let html = this.element.nativeElement.innerHTML;
        if (html.length) {
            html = html.replace(/\<mark\>/g, '').replace(/\<\/mark\>/g, '');
            if (text.length) {
                let textRegExp = new RegExp('(' + text + ')', 'gi');
                html = html.replace(textRegExp, '<mark>$1</mark>');
            }
            this.element.nativeElement.innerHTML = html;
        }
    };
}
