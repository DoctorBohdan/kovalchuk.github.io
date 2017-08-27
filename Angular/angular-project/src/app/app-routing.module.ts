import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelloComponent } from './helloList/hello.component';
import { TableComponent } from './productsTable/table.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'hello', component: HelloComponent },
            { path: 'table', component: TableComponent },
            { path: 'admin', component: AdminComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}