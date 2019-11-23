import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core"
import { NavService } from "../nav.service"
import { QuestionService } from "../question.service"
import { NbStepperComponent } from "@nebular/theme"
import { Router } from "@angular/router"

@Component({
    selector: "app-intro",
    templateUrl: "./intro.component.html",
    styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit, AfterViewInit {
    showStepper = false
    vorliebeItems = [
        {
            title: "Tomaten",
            value: "tomaten",
            disabled: false,
        },
        {
            title: "Gurken",
            value: "gurken",
            disabled: false,
        },
        {
            title: "Bohnen",
            value: "bohnen",
            disabled: false,
        },
        {
            title: "Erdbeeren",
            value: "erdbeeren",
            disabled: false,
        },
        {
            title: "Schnittlauch",
            value: "schnittlauch",
            disabled: false,
        },
        {
            title: "Paprika",
            value: "paprika",
            disabled: false,
        },
        {
            title: "Chilis",
            value: "chilis",
            disabled: false,
        },
        {
            title: "Salat",
            value: "salat",
            disabled: false,
        },
        {
            title: "Spinat",
            value: "spinat",
            disabled: false,
        },
    ]
    loading = true
    recommendations = [
        {
            img: "assets/Kresse-pflanzen.jpg",
            text: "Kresse, Wachstumsdauer, Skill-Level",
            selected: false,
        },
        {
            img: "assets/champignons.jpg",
            text: "Champignons, Wachstumsdauer, Skill-Level",
            selected: false,
        },
        {
            img: "assets/petersilie.jpeg",
            text: "Petersilie, Wachstumsdauer, Skill-Level",
            selected: false,
        },
        {
            img: "assets/radieschen.jpg",
            text: "Radieschen, Wachstumsdauer, Skill-Level",
            selected: false,
        },
    ]
    @ViewChild("stepper", { static: false }) stepperComponent: NbStepperComponent
    constructor(private navService: NavService, private questionService: QuestionService, private router: Router) {}

    ngOnInit() {
        this.navService.setHideFrame(true)
    }

    ngAfterViewInit() {
        // this.stepperComponent.selectedIndex = 5
    }

    timeoutLoading() {
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 2500)
    }

    selectRecommendation(item) {
        this.recommendations.forEach(item => (item.selected = false))
        item.selected = true
    }

    selectedChanged(event: any[]) {
        if (event.length === 3) {
            this.vorliebeItems.forEach(item => {
                if (event.findIndex(i => i === item.value) < 0) {
                    item.disabled = true
                }
            })
        } else {
            this.vorliebeItems.forEach(item => {
                item.disabled = false
            })
        }
    }

    equipmentToggle(event, source) {
        console.log(event + " " + source)
    }

    select(key: string, value: string) {
        console.log(key + " " + value)
        this.stepperComponent.next()
    }

    finish() {
        this.router.navigateByUrl("/overview")
    }
}
