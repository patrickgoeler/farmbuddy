import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {
    NbThemeModule,
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule,
    NbMenuModule,
    NbSidebarService,
    NbIconModule,
    NbStepperModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
} from "@nebular/theme"
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { IntroComponent } from "./intro/intro.component"
import { OverviewComponent } from "./overview/overview.component"
import { FormsModule } from "@angular/forms"

@NgModule({
    declarations: [AppComponent, IntroComponent, OverviewComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        NbThemeModule.forRoot({ name: "default" }),
        NbLayoutModule,
        NbButtonModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbEvaIconsModule,
        NbIconModule,
        NbInputModule,
        NbStepperModule,
        NbCardModule,
        NbSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
