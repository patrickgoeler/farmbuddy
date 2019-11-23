import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NbThemeModule, NbLayoutModule, NbButtonModule } from "@nebular/theme"
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { IntroComponent } from "./intro/intro.component"

@NgModule({
    declarations: [AppComponent, IntroComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: "default" }),
        NbLayoutModule,
        NbButtonModule,
        NbEvaIconsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
