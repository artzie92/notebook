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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var NoteApiService = (function () {
    function NoteApiService(http) {
        this.http = http;
    }
    NoteApiService.prototype.ngOnInit = function () {
        //this.getNotes()
        //    .subscribe(l => this.notes = l);
    };
    NoteApiService.prototype.getNotes = function () {
        var url = "http://localhost:36428/api/notes/";
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    NoteApiService.prototype.getNote = function (id) {
        var url = "http://localhost:36428/api/notes/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    NoteApiService.prototype.addNote = function (note) {
        var url = "http://localhost:36428/api/notes/";
        return this.http.post(url, note);
    };
    NoteApiService.prototype.updateNote = function (NoteModel) {
    };
    NoteApiService.prototype.deleteNote = function (id) {
    };
    NoteApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NoteApiService);
    return NoteApiService;
}());
exports.NoteApiService = NoteApiService;
//# sourceMappingURL=note-api.service.js.map