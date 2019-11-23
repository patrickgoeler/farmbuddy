import { Component, OnInit, ChangeDetectorRef } from "@angular/core"
import { NavService } from "../nav.service"

@Component({
    selector: "app-overview",
    templateUrl: "./overview.component.html",
    styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
    constructor(private navService: NavService) {}

    ngOnInit() {
        this.navService.setHideFrame(false)
    }
}
