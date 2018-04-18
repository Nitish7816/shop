import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PenpolyService {
  private penpolySubject: BehaviorSubject<object> = new BehaviorSubject<object>({});
  public penpolyObj = this.penpolySubject.asObservable();

  constructor() {}

  setPenpolyData(data: object) {
    this.penpolySubject.next(data);
  }
}
