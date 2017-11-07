import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//layout
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data:
        {
            breadcrumb: "Dash Board"
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data:
        {
            breadcrumb: "Login"
        }
    }
    ,
    {
        path: 'callback',
        component: CallbackComponent,
    }
]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule { }
