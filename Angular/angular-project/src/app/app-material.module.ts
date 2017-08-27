import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdMenuModule, MdCardModule, MdListModule, MdTableModule, MdSelectModule, MdInputModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdListModule,
        MdTableModule,
        MdSelectModule,
        MdInputModule,
        MdIconModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdListModule,
        MdTableModule,
        MdSelectModule,
        MdInputModule,
        MdIconModule
    ]
})

export class OwnMaterialModule { }