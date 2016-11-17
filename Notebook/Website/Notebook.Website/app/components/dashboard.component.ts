import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../models/note-model';
import { NoteApiService } from '../services/note-api.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-note',
    templateUrl: 'app/views/dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor(private noteApiService: NoteApiService) { }

    list: NoteModel[];

    ngOnInit(): void {
        this.list = this.noteApiService.notes;
        this.getNotes();
    }


    getNotes(): void{
        this.noteApiService.getNotes()
            .subscribe(l => { this.noteApiService.notes = l; this.list = this.noteApiService.notes; });
    }
}