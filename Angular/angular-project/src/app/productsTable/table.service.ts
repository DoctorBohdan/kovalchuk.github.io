import { Injectable } from '@angular/core';

import { ProductsList, Product } from '../shared/index';

@Injectable()
export class TableService {

    dataTable: Product[] = ProductsList;


    getData () {
        return this.dataTable;
    }  
    
    setData (value) {
        return this.dataTable.push(value);
    }
    
    removeData(selected: Product) {
        this.dataTable.splice(this.dataTable.indexOf(selected), 1);
    }

}