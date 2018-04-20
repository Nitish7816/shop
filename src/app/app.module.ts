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
import {ViewLiraComponent} from './components/view-article/view-lira.component';
import {LiraService} from './services/lira.service';
import {PenpolyService} from './services/penpoly.service';
import {ViewPenpolyComponent} from './components/view-article/view-penpoly.component';
import {AddComponent} from './components/item-layout/add.component';
import {AboutComponent} from './components/welcome/about.component';
import {ViewComponent} from './components/item-layout/view.component';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: 'addItem',
        component: AddComponent,
        children: [
          {
            path: 'king',
            component: KingComponent,
            // children: [
            //
            // ]

          },
          {
            path: 'lira',
            component: LiraComponent,
          },
          {
            path: 'penpoly',
            component: PenpolyComponent,
          },
        ]

      },
      {
        path: 'viewItem',
        component: ViewComponent,
        children: [
          {
            path: 'view-king',
            component: ViewKingComponent
          },
          {
            path: 'view-lira',
            component: ViewLiraComponent
          },
          {
            path: 'view-penpoly',
            component: ViewPenpolyComponent
          }
        ]
      },



      {
        path: 'about',
        component: AboutComponent
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
    ViewKingComponent,
    ViewLiraComponent,
    ViewPenpolyComponent,
    AddComponent,
    AboutComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    FormsModule
  ],
  providers: [UserService, KingService, LiraService, PenpolyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
