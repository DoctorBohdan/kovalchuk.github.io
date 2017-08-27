import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { TableService } from './productsTable/table.service';
import { OwnMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './helloList/hello.component';
import { TableComponent } from './productsTable/table.component';
import { AddItemComponent } from './productsTable/addItem/additem.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './products/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TableComponent,
    AddItemComponent,
    HomeComponent,
    AdminComponent,
    ProductsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwnMaterialModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
