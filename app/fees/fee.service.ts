import { Injectable } from '@angular/core';
import { Fee } from './fee';
import { FEE_ITEMS } from './fee-data';
import { findIndex } from 'lodash';

@Injectable()
export class FeeService {
  private pItems = FEE_ITEMS;

  getFeesFromData(): Fee[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(fee: Fee) {
    this.pItems.push(fee);
    console.log(this.pItems);
  }

  updateFee(fee: Fee) {
    let index = findIndex(this.pItems, (p: Fee) => {
      return p.id === fee.id;
    });
    this.pItems[index] = fee;
  }

  deleteFee(fee: Fee) {
    this.pItems.splice(this.pItems.indexOf(fee), 1);
    console.log(this.pItems);
  }

}

  // getProductsFromService(): Product[] {
  //   return [{
  //   id: 1,
  //   name: 'Scissors',
  //   description: 'use this to cut stuff',
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Steak Knives',
  //   description: 'use this to eat food with',
  //   price: 10.99
  // }, {
  //   id: 3,
  //   name: 'Shot Glass',
  //   description: 'use this to take shots',
  //   price: 5.99
  // }]
  // }
