import { Component, OnInit } from '@angular/core';

import { ProductsList, Product, Categories } from '../shared/index';
import { TableService } from './table.service';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})

export class TableComponent implements OnInit {
    constructor(private tableService: TableService) {   
        
    }

    productsArray: Product[] = [];

    defCategory = 'All';
    private categories = Categories;
    

    ngOnInit () {
        this.productsArray = this.tableService.getData();
    }

    deleteEvent(selected: Product) {
        this.tableService.removeData(selected);
    }

    filterCategoryData(value) {
        if (value == 'All') {
            return this.productsArray = this.tableService.getData();
        }
        this.productsArray = this.tableService.getData().filter((item) => {
            if (item.category == value) {
                return item;
            }
        });
    }    
}