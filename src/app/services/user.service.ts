import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private userObjSubject: BehaviorSubject<string> = new BehaviorSubject("a");
  public userName = this.userObjSubject.asObservable();
  constructor() {}
  setUser(username: string) {
    this.userObjSubject.next(username);
  }
}
