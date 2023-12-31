import { NgModule } from "@angular/core";
import { RecipeService } from "./recipes/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { ShoppinListService } from "./shopping-list/shopping-list.service";
import { LoggingService } from "./logging.service";


@NgModule({
    providers: [
        ShoppinListService,
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        LoggingService
    ],
})

export class CoreModule {


}