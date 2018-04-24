import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [`
  #btnLogin{
    margin-left: 241px;
  }
    #username{
      text-align: center;
    }
    #pass{
      text-align: center;
    }
    #profile{
      margin-left: 216px;
    }
  `]
})
export class LoginComponent {
  user: string;
  pass: string;
  data = [
    {
      username: 'nitish',
      password: 'a'
    },
    {
      username: 'amit',
      password: 'asdf'
    },
    {
      username: 'anything',
      password: 'abc123'
    }
  ];
  constructor(private router: Router, private userService: UserService) {}
  userLogin(e) {
    this.user = e.target.elements[0].value;
    this.pass = e.target.elements[1].value;
    console.log(this.user);
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].username === this.user && this.data[i].password === this.pass) {
        this.userService.setUser(this.data[i].username);
        this.router.navigate(['welcome']);
      }

    }
     // this.router.navigate(['welcome']);
  }
}
