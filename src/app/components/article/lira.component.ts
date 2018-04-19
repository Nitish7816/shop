import {Component} from '@angular/core';
import {KingService} from '../../services/king.service';
import {LiraService} from '../../services/lira.service';

@Component({
  selector: 'lira',
  templateUrl: './lira.component.html'
})
export class LiraComponent {
  article_id = ['select', 'L1', 'L2', 'L7', 'LO12', 'L21', 'L26', 'L48', 'L74', 'L89', 'L90', 'L94', 'L96', 'L100', 'L110', 'L128', 'L134'
  , 'L155', 'L164', 'L166', 'L178', 'L185', 'L194', 'L204', 'L234', 'L236', 'L241', 'L243', 'L253', 'L263', 'Y272', 'L294', 'L296', 'L328'
    , 'L345', 'L356', 'L364', 'L380', 'L388', 'L401', 'L409', 'L420', 'L426', 'L428', 'Y432', 'L436', 'L441', 'L445', 'L460', 'L462', 'L472'
    , 'L473', 'L475', 'L510', 'L553', 'Y560', 'L566', 'L575', 'L610', 'L618', 'L628', 'L669', 'L675', 'L676', 'L703', 'L706', 'L709', 'L717'
    , 'L725', 'L730', 'L754', 'L779', 'L784', 'L786', 'L794', 'L810', 'L815', 'L825', 'L826', 'L911', 'L917', 'L932', 'L938', 'L939', 'L951'
    , 'L996', 'L1001', 'L1002', 'L1006', '', 'L1007', 'L1010', 'L1014', 'L1019', 'L1020', 'L1021', 'L1025', 'L1026', 'L1029', 'L1033', 'L1054'
    , 'L1078', 'L1080', 'L1081', 'L1084', 'L1103', 'L1109', 'L1110', 'L1113', 'L1115', 'L1134', 'L1159', 'L1163', 'L1164', 'L1167', 'L1169', 'L1172'
    , 'L1175', 'L1176', 'L1185', 'L1187', 'L1205', 'L1213', 'L1214', 'L1216', 'L1220', 'L1222', 'L1229', 'L1261', 'L1265', 'L1269', 'L1281'
    , 'L1295', 'L1296', 'L1301', 'L1318', 'L1330', 'L1334', 'L1336', 'L1350', 'L1357', 'L1359', 'L1366', 'L1367'
  ];
  articleMap = {
    // 'select': [''],
    '1001': ['select', 'apple', 'orange'],
    '2002': ['select', 'aaa', 'bbb', 'ccc'],
    '4004': ['select', 'car', 'bike']
  };
  article = ['select', 'Box', 'Cone 5000mtr', 'Cone 10000mtr'];
  article_item= [];
  priceMap = {
    'Box': 110,
    'Cone 5000mtr': 55,
    'Cone 10000mtr': 85,
    // 'bike': '60k'
  };
  price = 0;
  aprice = 0;
  selectedItem: any;
  selectedCode: any;
  quantity: number;
  data = {};
  // articleCode = {};
  constructor(private liraService: LiraService) {
    // this.quantity = 0;

  }
  onChange(e) {
    this.selectedCode = e.target.value;
    // this.article_item = this.articleMap[this.selectedCode];
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
    this.data = {
      selectCode: this.selectedCode,
      selectItem: this.selectedItem,
      qty: this.quantity,
      price: this.price
    };
   // this.liraService.setLiraData(data);
    if (localStorage.getItem('lira') == null) {
      let lira: any = [];
      lira.push(JSON.stringify(this.data));
      console.log(lira);
      localStorage.setItem('lira', JSON.stringify(lira));
    }else {
      let lira: any = [];
      lira  = JSON.parse(localStorage.getItem('lira'));
      if (lira.selectCode !== this.selectedCode) {
        this.getfind(this.selectedCode);
      }
      localStorage.setItem('lira', JSON.stringify(lira));

    }
  }
  getfind(selectCode) {
    let lira = [];
    lira = JSON.parse(localStorage.getItem('lira'));
    console.log(lira);
    for (var i=0; i<lira.length; i++) {
      let item = JSON.parse(lira[i]);
      // console.log('item', item);
      // console.log(item.selectCode);
      lira.push(JSON.stringify(this.data));
    }
    console.log(this.selectedCode);
  }
}
