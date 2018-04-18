import {Component, OnInit} from '@angular/core';
import {LiraService} from '../../services/lira.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'view-lira',
  template: `
  <h1>Lira Item</h1>
  <p >
    article no:{{items.selectCode}}<br>
    article name:{{items.selectItem}}<br>
    no of article:{{items.qty}}<br>
    price:{{items.price}}

  </p>
  `
})
export class ViewLiraComponent implements OnInit {
  items: any = {};
  constructor(private liraservice: LiraService) {}
  ngOnInit() {
    this.getLiraData();
  }
  getLiraData() {
    this.liraservice.liraObj.subscribe((successData) => {
      this.items = successData;
    }, (errorData) => {
      console.log(errorData);
    });
  }
}
