import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                redirectTo: "auth/login",
                pathMatch: "full",
            },
            {
                path: "auth/login",
                component: LoginComponent,
                data: { returnUrl: window.location.pathname },
            },

            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "**", redirectTo: "login", pathMatch: "full" },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
