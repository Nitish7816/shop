import {Component, OnInit} from '@angular/core';
import {KingService} from '../../services/king.service';

@Component({
  selector: 'sell-king',
  templateUrl: './sell-king.component.html'
})
export class SellKingComponent implements OnInit {
  items = [];
  constructor(private kingService: KingService) {

  }
  ngOnInit() {
    this.getKingData();
    this.getLiraData();
  }
// king item
  getKingData() {
    let king = [];
    king = JSON.parse(localStorage.getItem('addking'));
    // console.log(king);
    for (var i=0; i < king.length; i++) {
      let item = JSON.parse(king[i]);
      this.items.push(item);
      console.log(this.items);
    }
  }

  // lira item
  getLiraData() {
    let lira = [];
    lira = JSON.parse(localStorage.getItem('addlira'));
    // console.log(king);
    for (var i=0; i < lira.length; i++) {
      let item = JSON.parse(lira[i]);
      this.items.push(item);
      console.log(this.items);
    }
  }
}
