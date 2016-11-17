import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../models/note-model';
import { NoteApiService } from '../services/note-api.service';
import { Router }   from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Location } from '@angular/common';

@Component({
    selector: 'my-note',
    templateUrl: 'app/views/dashboard.html',
    providers: [Location]
})
export class DashboardComponent implements OnInit {
    constructor(private noteApiService: NoteApiService,
        private router: Router) { }

    list: NoteModel[];

    ngOnInit(): void {
        this.list = this.noteApiService.notes;
        this.getNotes();
    }


    getNotes(): void {
        this.noteApiService.getNotes()
            .subscribe(l => {
                this.noteApiService.notes = l;
                this.list = this.noteApiService.notes;
            });
    }

    goToNote(note: NoteModel): void {
        let link = ['/note', note.Id];
        this.router.navigate(link);
    }
}