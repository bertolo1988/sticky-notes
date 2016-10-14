import { Injectable } from '@angular/core';
import { Note } from './note';

const NOTES: Note[] = [
    { title: 'First note', description: 'First of many.' },
    { title: 'Benfica', description: 'Red is Red.' },
    { title: 'CaSoft', description: 'Software for reaaaaaaaaaaaally big cats. Reaaaaaaaaaaaaaaaaaaaaally.' },
    { title: 'RoofRoof', description: 'Is this ok?' },
    { title: '33', description: '555555555555555555555555' },
];


@Injectable()
export class NotesService {
    get Notes(): Note[] {
        return NOTES;
    }
}