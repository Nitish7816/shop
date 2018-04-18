import {Component, OnInit} from '@angular/core';
import {PenpolyService} from '../../services/penpoly.service';

@Component({
  selector: 'view-penpoly',
  template: `
  <h1>View Penpoly Article</h1>
  <p >
    article no:{{items.selectCode}}<br>
    article name:{{items.selectItem}}<br>
    no of article:{{items.qty}}<br>
    price:{{items.price}}

  </p>
  `
})
export class ViewPenpolyComponent implements OnInit {
  items: any = {};
  constructor(private penpolyservice: PenpolyService) {}
  ngOnInit() {
    this.getPenpolyData();
  }
  getPenpolyData() {
    this.penpolyservice.penpolyObj.subscribe((successData) => {
      this.items = successData;
    }, (errorData) => {
      console.log(errorData);
    });
  }
}
