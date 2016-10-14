import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StickyList } from './sticky-list.component';
import { StickyNote } from './sticky-note.component';
import { NotesService } from './notes.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, StickyList, StickyNote],
    providers: [NotesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
