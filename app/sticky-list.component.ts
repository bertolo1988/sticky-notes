import { Component } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
    selector: 'sticky-list',
    template: `
        <h1>My sticky notes</h1>
        <ul class="notes">
            <span *ngFor="let note of notes" >
                <sticky-note [title]="note.title" [description]="note.description" (notify)='onClose($event)' ></sticky-note>
            </span>
        </ul>
        `,
    styles: [`
        h1{
            font-family: Arial;
            text-align: center;
        }`]
})

export class StickyList {
    notes: Note[];

    constructor(private NotesService: NotesService) {
    }

    ngOnInit() {
        this.notes = this.NotesService.Notes;
    }

    onClose(removableNote: Note) {
        this.notes = this.notes.filter((note) => {
            return !(note.title === removableNote.title && note.description === removableNote.description);
        });
    }

}