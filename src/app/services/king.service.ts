import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class KingService {

  private kingSubject: BehaviorSubject<object> = new BehaviorSubject({});
  public kingObj = this.kingSubject.asObservable();
  constructor() {
    // this.kingObj.subscribe((successData) => {
    //   console.log(successData);
    // }, (errorData) => {
    //     console.log(errorData);
    // });
  }
  setKingData(items: object) {
   this.kingSubject.next(items);
  }
}
