import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OwnMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './Lesson1/hello.component';
import { TableComponent } from './Lesson2/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'hello', component: HelloComponent },
      { path: 'table', component: TableComponent },
      { path: '', redirectTo: "hello", pathMatch: "full" }
    ]),
    FormsModule,
    OwnMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
