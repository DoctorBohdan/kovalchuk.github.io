import { Component, Input } from '@angular/core';

import { ProductsList, Product, Categories } from '../../shared/index';
import { TableService } from '../table.service';

@Component({
    moduleId: module.id,
    selector: 'add-item',
    templateUrl: 'additem.component.html',
    styleUrls: ['additem.component.scss']
})

export class AddItemComponent {
    constructor(private tableService: TableService) {           
    }

    productsArray: Product[] = [];
    private categories = Categories;

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

        this.tableService.setData(this.template);
    }
}