import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

const routingAplikasi: Routes = [
  { path: "about", component: AboutComponent },
  { path: "**", component: WelcomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routingAplikasi)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
