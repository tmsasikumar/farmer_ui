import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { AddFarmerComponent } from "./components/farmer/add-farmer.component";
import { HomeComponent } from "./components/home.component";
import {FaqComponent} from "./components/faq/faq.component";
import {MyFarmersComponent} from "./components/farmer/my-farmers.component";
import {AuthGuard} from "./guards/auth.guard";
import {FarmerDetailsComponent} from "./components/FarmerDetails/farmer-details.component";
import {ContactComponent} from "./components/contact/contact.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addFarmer', component: AddFarmerComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'myFarmers', component: MyFarmersComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'farmerDetails/:id', component: FarmerDetailsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);
