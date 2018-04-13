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
import {ViewKingComponent} from './components/view-article/view-king.component';
import {KingService} from './services/king.service';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: 'king',
        component: KingComponent,
        children: [
          {
            path: 'view-king',
            component: ViewKingComponent
          }
        ]
      },
      {
        path: 'lira',
        component: LiraComponent
      },
      {
        path: 'penpoly',
        component: PenpolyComponent
      },
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
    ViewKingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    FormsModule
  ],
  providers: [UserService, KingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
