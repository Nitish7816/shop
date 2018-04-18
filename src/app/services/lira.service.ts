import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LiraService {
  private liraSubject: BehaviorSubject<object> = new BehaviorSubject<object>({});
  public liraObj = this.liraSubject.asObservable();

  constructor() {}

  setLiraData(data: object) {
    this.liraSubject.next(data);
  }
}
