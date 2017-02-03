import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from "./components/home.component";
import { LoginComponent }  from './components/login';
import { RegisterComponent }  from './components/register.component';
import { routing } from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
