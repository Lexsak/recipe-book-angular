import { NgModule } from "@angular/core";
import { AuthComponenet } from "./auth.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        AuthComponenet,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: AuthComponenet }]),
        SharedModule
    ]
})

export class AuthModule {

}