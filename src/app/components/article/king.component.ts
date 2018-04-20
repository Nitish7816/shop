import {Component} from '@angular/core';
import {KingService} from '../../services/king.service';

@Component({
  selector: 'king',
  templateUrl: './king.component.html',

})
export class KingComponent {
  article_id = ['select', '1578', 'H1518', 'H2405', 'H1529', '1538', 'H1530', 'H1543', 'H1540', '3171', 'H1783', '1758', '3040', '1844'
    , 'H1731', '3167', '01914', '2572', '2004', '3153', '2525', 'H1669', '1833', 'H1844', '584', '590', '651', '510', '595', '520', '536'
    , 'H63', '661', '703', '631', '677', '624', '711', '632', 'H601', 'H745', 'H784', '629', '712', '700', '621', 'H736', 'H712', 'H783',
    '709', 'H740', 'H776'
  ];
  articleMap = {
    // 'select': [''],
     'H1518': ['select', 'Box', 'Cone 5000mtr'], 'H2405': ['select', 'Box', 'Cone 5000mtr'],
    'H1529': ['select', 'Box', 'Cone 5000mtr'], 'H1530': ['select', 'Box', 'Cone 5000mtr'], 'H1543': ['select', 'Box', 'Cone 5000mtr'],
    'H1540': ['select', 'Box', 'Cone 5000mtr'], 'H1783': ['select', 'Box', 'Cone 5000mtr'], 'H1731': ['select', 'Box', 'Cone 5000mtr'],
    'H1669': ['select', 'Box', 'Cone 5000mtr'], 'H1844': ['select', 'Box', 'Cone 5000mtr'], 'H63': ['select', 'Box', 'Cone 5000mtr'],
    'H601': ['select', 'Box', 'Cone 5000mtr'], 'H745': ['select', 'Box', 'Cone 5000mtr'], 'H784': ['select', 'Box', 'Cone 5000mtr'],
    'H736': ['select', 'Box', 'Cone 5000mtr'], 'H712': ['select', 'Box', 'Cone 5000mtr'], 'H783': ['select', 'Box', 'Cone 5000mtr'],
    'H740': ['select', 'Box', 'Cone 5000mtr'], 'H776': ['select', 'Box', 'Cone 5000mtr'],
    '1538': ['select', 'Box', 'Cone 5000mtr'], '1578': ['select', 'Box', 'Cone 5000mtr'], '3171': ['select', 'Box', 'Cone 5000mtr'],
    '1758': ['select', 'Box', 'Cone 5000mtr'], '3040': ['select', 'Box', 'Cone 5000mtr'], '2572': ['select', 'Box', 'Cone 5000mtr'],
    '1844': ['select', 'Box', 'Cone 5000mtr'], '3167': ['select', 'Box', 'Cone 5000mtr'], '01914': ['select', 'Box', 'Cone 5000mtr'],
    '2004': ['select', 'Box', 'Cone 5000mtr'], '3153': ['select', 'Box', 'Cone 5000mtr'], '2525': ['select', 'Box', 'Cone 5000mtr'],
    '1833': ['select', 'Box', 'Cone 5000mtr'],
    '584': ['select', 'Box', 'Cone 5000mtr'], '590': ['select', 'Box', 'Cone 5000mtr'], '510': ['select', 'Box', 'Cone 5000mtr'],
    '651': ['select', 'Box', 'Cone 5000mtr'], '595': ['select', 'Box', 'Cone 5000mtr'], '520': ['select', 'Box', 'Cone 5000mtr'],
    '536': ['select', 'Box', 'Cone 5000mtr'], '661': ['select', 'Box', 'Cone 5000mtr'], '703': ['select', 'Box', 'Cone 5000mtr'],
    '631': ['select', 'Box', 'Cone 5000mtr'], '677': ['select', 'Box', 'Cone 5000mtr'], '624': ['select', 'Box', 'Cone 5000mtr'],
    '711': ['select', 'Box', 'Cone 5000mtr'], '632': ['select', 'Box', 'Cone 5000mtr'], '629': ['select', 'Box', 'Cone 5000mtr'],
    '712': ['select', 'Box', 'Cone 5000mtr'], '700': ['select', 'Box', 'Cone 5000mtr'], '621': ['select', 'Box', 'Cone 5000mtr'],
    '709': ['select', 'Box', 'Cone 5000mtr'],
  };
  article_item= [];
  priceMap = {
    'Box': 110,
    'Cone 5000mtr': 55,
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
    // console.log(this.selectedCode);
    // console.log(this.selectedItem);
    // console.log(this.quantity);
    // console.log(this.price);
    let data = {
      selectCode: this.selectedCode,
      selectItem: this.selectedItem,
      qty: this.quantity,
      price: this.price
    };
    // this.kingService.setKingData(data);
    if (localStorage.getItem('addking') == null) {
      let king: any = [];
      king.push(JSON.stringify(data));
      localStorage.setItem('addking', JSON.stringify(king));
      alert('success ');
    }else {
      let king: any = JSON.parse(localStorage.getItem('addking'));
      let index: number = -1;
      for (var i = 0; i < king.length; i++) {
        let item = JSON.parse(king[i]);
        if (item.selectCode === data.selectCode && item.selectItem === data.selectItem) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        king.push(JSON.stringify(data));
        localStorage.setItem('addking', JSON.stringify(king));
        alert('success ');
      }else {
        let item  = JSON.parse(king[index]);
        item.qty += data.qty;
        item.price += data.price;
        king[index] = JSON.stringify(item);
        localStorage.setItem('addking', JSON.stringify(king));
        alert('success ');
      }
    }

  }
}
