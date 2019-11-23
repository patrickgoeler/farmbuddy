import { Component, ChangeDetectorRef, OnInit } from "@angular/core"
import { NbMenuItem } from "@nebular/theme"
import { NavService } from "./nav.service"
import { Router, NavigationStart, NavigationEnd } from "@angular/router"

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "farmbuddy"
    hideFrame = true
    menuItems: NbMenuItem[] = [
        {
            title: "Overview",
            icon: "home",
            link: "/overview",
        },
        {
            title: "To Do",
            icon: "checkmark-circle-outline",
            link: "/todo",
        },
        {
            title: "Shopping List",
            icon: "shopping-cart-outline",
            link: "/shopping",
        },
        {
            title: "Profile",
            icon: "person-outline",
            link: "/profile",
        },
    ]
    constructor(public navService: NavService, private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log(event)
                if (event.url === "/") {
                    this.hideFrame = true
                } else {
                    this.hideFrame = false
                }
            }
        })
    }

    test(testvar) {
        console.log(testvar)
    }
}
