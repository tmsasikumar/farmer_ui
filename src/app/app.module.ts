import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from "./components/home.component";
import { LoginComponent }  from './components/login/login.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { RegisterComponent }  from './components/register/register.component';
import {AuthenticationService} from "./services/AuthenticationService";
import {HttpService} from "./services/httpService";
import { Routing } from "./app.routing";
import {AuthGuard} from "./guards/auth.guard";
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {farmerService} from "./services/farmer-service";
import {AddFarmerComponent} from "./components/farmer/add-farmer.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FaqService} from "./services/faq-service";
import {KeysPipe} from "./pipes/keys_pipe";
import {FarmerCardComponent} from "./components/farmer/farmer-card.component";
import {FarmerCatalogComponent} from "./components/farmer/farmer-catalog.component";
import {FaqComponent} from "./components/faq/faq.component";
import {FarmerDetailsComponent} from "./components/FarmerDetails/farmer-details.component";

@NgModule({
  imports:      [ BrowserModule, Routing, FormsModule, HttpModule, CommonModule ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, RegisterComponent, DashboardComponent, HeaderComponent, AddFarmerComponent, FooterComponent, FarmerCardComponent, FarmerCatalogComponent, KeysPipe, FaqComponent, FarmerDetailsComponent, ContactComponent],
  providers: [ AuthenticationService, HttpService , AuthGuard, farmerService,  FaqService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
