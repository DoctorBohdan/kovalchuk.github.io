import { Component, Input } from '@angular/core';

import { ProductsList, Product } from './index';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent {
    dataTable: Product[] = ProductsList;
    productsArray: Product[] = [];

    defCategory = 'All';
    categories = [ 
        'All',
        'Category 1',
        'Category 2',
        'Category 3'     
    ];

    ngOnInit () {
        this.productsArray = this.dataTable;
    }

    filterCategoryData(value) {
        if (value == 'All') {
            return this.productsArray = this.dataTable;
        }
        this.productsArray = this.dataTable.filter((item) => {
            if (item.category == value) {
                return item;
            }
        });
    }

    removeData(selected: Product) {
        this.dataTable.splice(this.dataTable.indexOf(selected), 1);
    }

    @Input()
    newId: number;

    @Input()
    newName: string;

    @Input()
    newPrice: number;

    @Input()
    newCategory: string;

    template: Product;

    addData(newId, newName, newPrice, newCategory) {
        this.template = {
            id: this.newId,
            name: this.newName,
            price: this.newPrice,
            category: this.newCategory
        };

        this.dataTable.push(this.template);
    }
}