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
    NbCheckboxModule,
} from "@nebular/theme"
import { NbEvaIconsModule } from "@nebular/eva-icons"
import { IntroComponent } from "./intro/intro.component"
import { OverviewComponent } from "./overview/overview.component"
import { FormsModule } from "@angular/forms";
import { ShoppingComponent } from './shopping/shopping.component';
import { TodoComponent } from './todo/todo.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
    declarations: [AppComponent, IntroComponent, OverviewComponent, ShoppingComponent, TodoComponent, ProfileComponent],
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
        NbCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
