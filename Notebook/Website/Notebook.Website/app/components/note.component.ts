import { Component, Input, OnInit } from '@angular/core';
import { NoteApiService } from '../services/note-api.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { NoteModel } from '../models/note-model';

@Component({
    providers: [NoteApiService, Location],
    templateUrl: 'app/views/note.html'
})
export class NoteComponent implements OnInit {

    constructor(private noteApiService: NoteApiService,
        private route: ActivatedRoute) { }

    currentNote: NoteModel = new NoteModel();

    ngOnInit(): void {
        var id = this.route.params.value['id']
        if (id != 0) {
            this.noteApiService.getNote(id)
                .subscribe(l => this.currentNote = l);
        }
    }

    saveNote(): void {
        this.noteApiService
            .addNote(this.currentNote)
            .subscribe(res => {
                console.log(res);
            });
    }
    



}