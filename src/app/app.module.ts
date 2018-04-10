import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { LoginComponent} from './components/login/login.component';
import {UserService} from './services/user.service';
import {KingComponent} from './components/article/king.component';
import {LiraComponent} from './components/article/lira.component';
import {PenpolyComponent} from './components/article/penpoly.component';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: 'king',
        component: KingComponent
      },
      {
        path: 'lira',
        component: LiraComponent
      },
      {
        path: 'penpoly',
        component: PenpolyComponent
      }
    ]
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    KingComponent,
    LiraComponent,
    PenpolyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
