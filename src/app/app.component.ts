import { Component } from "@angular/core"
import { NbMenuItem } from "@nebular/theme"
import { NavService } from "./nav.service"

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "farmbuddy"
    menuItems: NbMenuItem[] = [
        {
            title: "Overview",
            icon: "home",
            link: "/overview",
        },
    ]
    constructor(public navService: NavService) {}
}
