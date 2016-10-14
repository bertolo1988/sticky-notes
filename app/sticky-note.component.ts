import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Note } from './note';

@Component({
    selector: 'sticky-note',
    template: `
        <li>
            <span class="close" (click)="onClose()" >&#10006;</span>
            <div class="content">
                <h3>{{ title }}</h3>
                <p>{{ description }}</p>
            </div>
        </li>`,
    styles: [`
        li{
            padding: 15px;
            background: rgb(219, 219, 219);
            margin: 5px;
            overflow: visible;
            list-style:none;
            float: left;
            display: block
        }
        span.close{
            color: rgb(219, 219, 219);
            float:right;
        }
        span.close:hover {
            color: rgb(0, 0, 0);
        }
        li h3,p{
            font-family: Arial;
        }`]
})

export class StickyNote {

    @Input() title: string;
    @Input() description: string;
    @Output() notify: EventEmitter<Object> = new EventEmitter<Object>();

    constructor() {

    }

    onClose() {
        this.notify.emit({ 'title': this.title, 'description': this.description });
    }


}

