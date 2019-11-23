import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
    todos = [
        {
            title: "Blumenkübel kaufen",
            checked: true,
        },
        {
            title: "Samen kaufen",
            checked: false,
        },
        {
            title: "Schaufel kaufen",
            checked: false,
        },
        {
            title: "Erde kaufen",
            checked: false,
        },
        {
            title: "Gießkanne kaufen",
            checked: true,
        },
    ]
    constructor() {}

    ngOnInit() {}
}
