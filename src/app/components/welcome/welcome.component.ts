import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styles: [
    `
    
    `
  ]
})
export class WelcomeComponent implements OnInit {
  name: string;
constructor(private userService: UserService) {}
ngOnInit() {
  this.getUser();
}
getUser() {
  this.userService.userName.subscribe(user => {
    this.name = user;
    console.log(this.name);
  }, err => {
    console.log(err);
  });
}
}
