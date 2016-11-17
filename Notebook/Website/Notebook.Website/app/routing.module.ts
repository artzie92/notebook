import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

import { NoteComponent } from './components/note.component';



const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: '/note/0',
        pathMatch: 'full'
    },
    {
        path: 'note/:id',
        component: NoteComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }