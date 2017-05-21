import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TransaksiModule } from './transaksi/transaksi.module';

import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/authguard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './shared/login/login.component';

const routingAplikasi: Routes = [
  { path: "login", component: LoginComponent},
  { path: "about", component: AboutComponent, canActivate : [AuthGuard] },
  { path: "transaksi", redirectTo: "/transaksi", pathMatch: "full", canActivateChild : [AuthGuard]},
  { path: "**", component: WelcomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TransaksiModule,
    RouterModule.forRoot(routingAplikasi)
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
