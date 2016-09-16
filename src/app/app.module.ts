import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {appRoutingProviders, routing} from "./app.routing";
import {FORM_DIRECTIVES} from "@angular/forms/src/directives";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
