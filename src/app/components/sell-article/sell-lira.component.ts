import {Component} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'sell-lira',
  templateUrl: './sell-lira.component.html',
})
export  class SellLiraComponent {

  items = [

    ];

  addItem() {
    this.items.push([
      {
        description: 'description',
        quentity: 1,
        cost: 1
      }
    ]);
  }
  removeItem(m) {
    this.items.splice(this.items.indexOf(m), 1);
  }
  subTotal() {
    var total = 0.0;

  }
}
