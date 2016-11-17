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
var DashboardComponent = (function () {
    function DashboardComponent(noteApiService) {
        this.noteApiService = noteApiService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.list = this.noteApiService.notes;
        this.getNotes();
    };
    DashboardComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteApiService.getNotes()
            .subscribe(function (l) { _this.noteApiService.notes = l; _this.list = _this.noteApiService.notes; });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-note',
            templateUrl: 'app/views/dashboard.html'
        }), 
        __metadata('design:paramtypes', [note_api_service_1.NoteApiService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map