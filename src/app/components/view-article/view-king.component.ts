import {Component, OnInit} from '@angular/core';
import {KingService} from '../../services/king.service';

@Component({
  selector: 'view-king',
  templateUrl: './view-king.component.html'
})
export class ViewKingComponent implements OnInit {
  items: any = {};
  constructor(private kingService: KingService) {

  }
  ngOnInit() {
    this.getKingData();
  }
  getKingData() {
    this.kingService.kingObj.subscribe((successData) => {
      this.items = successData;
    }, (errorData) => {
      console.log(errorData);
    });
  }
}
