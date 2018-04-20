import {Component, OnInit} from '@angular/core';
import {LiraService} from '../../services/lira.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'view-lira',
  template: `
  <div class="container">
    <h1>View lira data</h1>
    <table border="1">
      <tr>
        <th>article no</th>
        <th>article Name</th>
        <th> no of article</th>
        <th>Price</th>
        <!--<th>Buy</th>-->
      </tr>
      <tr *ngFor="let i of items">
        <td>{{i.selectCode}}</td>
        <td>{{i.selectItem}}</td>
        <td>{{i.qty}}</td>
        <td>{{i.price}}</td>
      </tr>
    </table>
  </div>
  `
})
export class ViewLiraComponent implements OnInit {
  items = [];
  constructor(private liraservice: LiraService) {}
  ngOnInit() {
    this.getLiraData();
  }

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

  // getLiraData() {
  //   this.liraservice.liraObj.subscribe((successData) => {
  //     this.items = successData;
  //   }, (errorData) => {
  //     console.log(errorData);
  //   });
  // }
}
