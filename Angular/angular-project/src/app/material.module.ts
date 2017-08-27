import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdMenuModule, MdCardModule, MdListModule, MdTableModule, MdSelectModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdListModule,
        MdTableModule,
        MdSelectModule
    ],
    exports: [
        BrowserAnimationsModule,
        MdButtonModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdListModule,
        MdTableModule,
        MdSelectModule
    ]
})

export class OwnMaterialModule { }