import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from "./components/home.component";
import { LoginComponent }  from './components/login/login.component';
import { RegisterComponent }  from './components/register.component';
import {AuthenticationService} from "./services/AuthenticationService";
import {HttpService} from "./services/httpService";
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, RegisterComponent],
  providers: [ AuthenticationService, HttpService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
