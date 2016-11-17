import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { NoteModel } from '../models/note-model';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteApiService implements OnInit{

    notes: NoteModel[];

    constructor(private http: Http) { }

    ngOnInit(): void {
        
    }

   

    getNotes(): Observable<NoteModel[]> {
        var url = "http://localhost:36428/api/notes/";
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getNote(id: number): Observable<NoteModel> {
        var url = "http://localhost:36428/api/notes/" + id;
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    addNote(note:NoteModel) {
        var url = "http://localhost:36428/api/notes/"
        return this.http.post(url, note);
    }

    updateNote(note:NoteModel){
        var url = "http://localhost:36428/api/notes/" + note.Id;
        return this.http.put(url, note);
    }

    deleteNote(id: number) {
        var url = "http://localhost:36428/api/notes/" + id;
        return this.http.delete(url);
    }

  
}