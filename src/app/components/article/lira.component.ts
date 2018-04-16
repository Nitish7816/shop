import {Component} from '@angular/core';
import {KingService} from '../../services/king.service';

@Component({
  selector: 'lira',
  templateUrl: './lira.component.html'
})
export class LiraComponent {
  article_id = ['select', '1001', '2002', '3003', '4004', '1003'];
  articleMap = {
    // 'select': [''],
    '1001': ['select', 'apple', 'orange'],
    '2002': ['select', 'aaa', 'bbb', 'ccc'],
    '4004': ['select', 'car', 'bike']
  };
  article_item= [];
  priceMap = {
    'apple': 100,
    'orange': 60,
    'car': 1000000,
    'bike': '60k'
  };
  price = 0;
  aprice = 0;
  selectedItem: any;
  selectedCode: any;
  quantity: number;
  // articleCode = {};
  constructor(private kingService: KingService) {
    // this.quantity = 0;
  }
  onChange(e) {
    this.selectedCode = e.target.value;
    this.article_item = this.articleMap[this.selectedCode];
    this.quantity = 0;
    this.price = 0;
  }
  onPrice(p) {
    this.selectedItem = p.target.value;
    this.price = this.priceMap[this.selectedItem];
    this.quantity = 0;
    this.price = 0;
  }
  onArticle(e) {
    this.aprice = e.target.value;
    this.price = (this.aprice) * (this.priceMap[this.selectedItem]);

  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.selectedCode);
    console.log(this.selectedItem);
    console.log(this.quantity);
    console.log(this.price);
    let data = {
      selectCode: this.selectedCode,
      selectItem: this.selectedItem,
      qty: this.quantity,
      price: this.price
    };
    this.kingService.setKingData(data);
  }
}
