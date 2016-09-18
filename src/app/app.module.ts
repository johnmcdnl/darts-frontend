import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {appRoutingProviders, routing} from "./app.routing";
import {TargetCreateComponent} from "./targets/create/create.component";
import {TargetsRetrieveComponent} from "./targets/retrieve/retrieve.component";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AuthGuard} from "./auth/auth-guard.service";
import {Auth} from "./auth/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        TargetCreateComponent,
        TargetsRetrieveComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [appRoutingProviders, AUTH_PROVIDERS, AuthGuard, Auth],
    bootstrap: [AppComponent]
})
export class AppModule {
}
