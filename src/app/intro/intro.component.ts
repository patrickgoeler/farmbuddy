import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from "@angular/core"
import { NavService } from "../nav.service"
import { QuestionService } from "../question.service"
import { NbStepperComponent, NbDialogService } from "@nebular/theme"
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router"
import { DialogComponent } from "../dialog/dialog.component"

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
    loading = false
    recommendations = [
        {
            img: "assets/Kresse-pflanzen.jpg",
            title: "Kresse",
            text: "Ernte nach: 1 Woche",
            skillLevel: [0, 1, 1],
            selected: false,
            additionalInfo:
                "Kresse wächst bei einer Temperatur von 15° Celsius optimal und kann ganzjährig Indoor angebaut werden. Das Nährstoffprofil ist absolut anspruchslos und eignet sich damit perfekt für die Anfänger. Der Boden, meist Zewa oder Watte, sollte stets feucht gehalten werden. Die Kresse ist bereits nach ca. 1 Woche erntereif und kann mit einer Schere geerntet werden.",
        },
        {
            img: "assets/champignons.jpg",
            title: "Champignons",
            text: "Ernte nach: 3 Wochen",
            skillLevel: [0, 0, 1],
            selected: false,
            additionalInfo:
                "Petersilie ist eines der beliebtesten Küchenkräuter und kann indoor ganzjährig angebaut werden. Auch für den Balkon ist sie geeignet, solange es nicht kälter als 8° Celsius wird. Der Petersilie tut ein wenig Dünger mal ganz gut, um den Wachstum bis zur Ernte nach 10 Wochen zu beschleunigen.",
        },
        {
            img: "assets/petersilie.jpeg",
            title: "Petersilie",
            text: "Ernte nach: 10 Wochen",
            skillLevel: [0, 0, 1],
            selected: false,
            additionalInfo:
                "Champignons sind für viele wahrscheinlich eine Überraschung auf dieser Liste. Spezielle Erde muss einfach nur feucht und möglichst steril gehalten werden und nach ca. 3 Wochen sprießen die ersten Pilze empor. Besonders spannend ist, dass die Pilze kein Licht benötigen und Indoor ganzjährig angebaut werden können. Nach ein paar Ernten und ca. 5 Monaten sind die Bakterien in der Erde erschöpft und müssen erneuert werden.",
        },
        {
            img: "assets/radieschen.jpg",
            title: "Radieschen",
            text: "Ernte nach: 5 Wochen",
            skillLevel: [0, 0, 1],
            selected: false,
            additionalInfo:
                "Radieschen können sowohl draußen als auch drinnen angebaut werden, solange es nicht kälter als 12° Celsius sind. Es tut ganz gut die Erde vorher zu düngen und die Triebe später zu vereinzeln. Nach ca. 5 Wochen sind die Radieschen dann bereit für die Ernte.",
        },
    ]
    @ViewChild("stepper", { static: false }) stepperComponent: NbStepperComponent
    constructor(
        private navService: NavService,
        private questionService: QuestionService,
        private router: Router,
        private dialogService: NbDialogService,
        private r: ActivatedRoute,
    ) {}

    ngOnInit() {
        console.log(this.r.snapshot.fragment)
        const fragment = this.r.snapshot.fragment
        if (fragment) {
            const step = Number(fragment.split("step")[1])
            console.log("init at step " + step)
            this.showStepper = true
            setTimeout(() => {
                this.stepperComponent.selectedIndex = step
            }, 10)
        }
    }

    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const fragment = this.r.snapshot.fragment
                if (fragment && this.stepperComponent) {
                    const step = Number(fragment.split("step")[1])
                    this.stepperComponent.selectedIndex = step
                } else if (fragment && !this.stepperComponent) {
                    this.showStepper = true
                    const step = Number(fragment.split("step")[1])
                    setTimeout(() => {
                        this.stepperComponent.selectedIndex = step
                    }, 10)
                } else if (event.url === "/") {
                    this.showStepper = false
                }
            }
        })
    }

    async openDialog(item) {
        await this.dialogService.open(DialogComponent, {
            context: {
                title: item.title,
                text: item.additionalInfo,
            },
        })
    }

    enableStepper() {
        this.showStepper = true
        this.router.navigate([], {
            fragment: "step" + 0,
        })
    }

    goNext() {
        this.stepperComponent.next()
        this.router.navigate([], {
            fragment: "step" + this.stepperComponent.selectedIndex,
        })
    }

    timeoutLoading() {
        this.loading = true
        this.goNext()
        setTimeout(() => {
            this.loading = false
        }, 3300)
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
        this.goNext()
    }

    finish() {
        this.router.navigateByUrl("/overview")
    }
}
