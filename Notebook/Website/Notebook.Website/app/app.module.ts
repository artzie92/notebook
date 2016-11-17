import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing.module';

import { NoteComponent } from './components/note.component';
import { DashboardComponent } from './components/dashboard.component';

import { NoteApiService } from './services/note-api.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],

    declarations: [
        DashboardComponent, NoteComponent
    ],

    bootstrap: [
        DashboardComponent
    ],

    providers: [
        NoteApiService, Location
    ]
})
export class AppModule {

}
