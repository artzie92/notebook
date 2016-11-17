import { Component, Input, OnInit } from '@angular/core';
import { NoteApiService } from '../services/note-api.service';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { NoteModel } from '../models/note-model';
import { Location }  from '@angular/common';

@Component({
    templateUrl: 'app/views/note.html',
    providers: [Location]
})
export class NoteComponent implements OnInit {

    constructor(private noteApiService: NoteApiService,
        private route: ActivatedRoute, private router: Router) { }

    currentNote: NoteModel = new NoteModel();

    ngOnInit(): void {
        var id = this.route.params.value['id']
        if (id != 0) {
            this.noteApiService.getNote(id)
                .subscribe(l => this.currentNote = l);
        }
    }

    saveNote(): void {
        var id = this.route.params.value['id']
        if (id == 0) {
            this.noteApiService
                .addNote(this.currentNote)
                .subscribe(res => {                   
                    this.noteApiService.notes.unshift(res.json());
                    let url = '/note/' + res.json().Id;
                    console.log(res);
                    this.router.navigateByUrl(url);
                });
            return;
        }

        this.updateNote();
    }

    updateNote(): void {
        this.noteApiService
            .updateNote(this.currentNote)
            .subscribe(res => {
                var id = this.route.params.value['id']
                for (let i = 0; i < this.noteApiService.notes.length; i++){
                    if (this.noteApiService.notes[i].Id == id) {                       
                        this.noteApiService.notes[i].Title = this.currentNote.Title;
                        break;
                    }
                }
                console.log(res);
            });
    }

    removeNote(): void {
        this.noteApiService
            .deleteNote(this.currentNote.Id)
            .subscribe(res => {
                for (let i = 0; i < this.noteApiService.notes.length; i++) {
                    if (this.noteApiService.notes[i].Id == this.currentNote.Id) {
                        this.noteApiService.notes.splice(i, 1);
                        break;
                    }
                }
                let url = '/note/0'
                console.log(res);
                this.router.navigateByUrl(url);
            });
    }

}