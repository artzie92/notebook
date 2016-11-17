"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var note_api_service_1 = require('../services/note-api.service');
var router_1 = require('@angular/router');
var note_model_1 = require('../models/note-model');
var common_1 = require('@angular/common');
var NoteComponent = (function () {
    function NoteComponent(noteApiService, route, router) {
        this.noteApiService = noteApiService;
        this.route = route;
        this.router = router;
        this.currentNote = new note_model_1.NoteModel();
    }
    NoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.value['id'];
        if (id != 0) {
            this.noteApiService.getNote(id)
                .subscribe(function (l) { return _this.currentNote = l; });
        }
    };
    NoteComponent.prototype.saveNote = function () {
        var _this = this;
        var id = this.route.params.value['id'];
        if (id == 0) {
            this.noteApiService
                .addNote(this.currentNote)
                .subscribe(function (res) {
                _this.noteApiService.notes.unshift(res.json());
                var url = '/note/' + res.json().Id;
                console.log(res);
                _this.router.navigateByUrl(url);
            });
            return;
        }
        this.updateNote();
    };
    NoteComponent.prototype.updateNote = function () {
        var _this = this;
        this.noteApiService
            .updateNote(this.currentNote)
            .subscribe(function (res) {
            var id = _this.route.params.value['id'];
            for (var i = 0; i < _this.noteApiService.notes.length; i++) {
                if (_this.noteApiService.notes[i].Id == id) {
                    _this.noteApiService.notes[i].Title = _this.currentNote.Title;
                    break;
                }
            }
            console.log(res);
        });
    };
    NoteComponent.prototype.removeNote = function () {
        var _this = this;
        this.noteApiService
            .deleteNote(this.currentNote.Id)
            .subscribe(function (res) {
            for (var i = 0; i < _this.noteApiService.notes.length; i++) {
                if (_this.noteApiService.notes[i].Id == _this.currentNote.Id) {
                    _this.noteApiService.notes.splice(i, 1);
                    break;
                }
            }
            var url = '/note/0';
            console.log(res);
            _this.router.navigateByUrl(url);
        });
    };
    NoteComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/note.html',
            providers: [common_1.Location]
        }), 
        __metadata('design:paramtypes', [note_api_service_1.NoteApiService, router_1.ActivatedRoute, router_1.Router])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map