import {Component, OnInit} from '@angular/core';
import {KingService} from '../../services/king.service';

@Component({
  selector: 'view-king',
  templateUrl: './view-king.component.html'
})
export class ViewKingComponent implements OnInit {
  items = [];
  constructor(private kingService: KingService) {

  }
  ngOnInit() {
    this.getKingData();
  }

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
  // getKingData() {
  //   this.kingService.kingObj.subscribe((successData) => {
  //     this.items = successData;
  //   }, (errorData) => {
  //     console.log(errorData);
  //   });
  // }
}
