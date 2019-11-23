import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core"
import { NavService } from "../nav.service"
import { QuestionService } from "../question.service"
import { NbStepperComponent } from "@nebular/theme"

@Component({
    selector: "app-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit, AfterViewInit {
    showStepper = true
    @ViewChild("stepper", { static: false }) stepperComponent: NbStepperComponent
    constructor(private navService: NavService, private questionService: QuestionService) {}

    ngOnInit() {
        this.navService.hideFrame = true
    }

    ngAfterViewInit() {
        this.stepperComponent.selectedIndex = 4
    }

    select(key: string, value: string) {
        console.log(key + " " + value)
        this.stepperComponent.next()
    }
}
