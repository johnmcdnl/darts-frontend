import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ModuleWithProviders} from "@angular/core";
import {TargetCreateComponent} from "./targets/create/create.component";

const appRoutes: Routes = [
    //TODO break-out into sub routers
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'targets', component: TargetCreateComponent},
    {path: 'targets/create', component: TargetCreateComponent},
    {path: '', component: RegisterComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);