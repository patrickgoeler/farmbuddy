import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
    todos = [
        {
            title: "Einkaufsliste abarbeiten",
            checked: true,
            experienceGain: 50,
            exp: "big",
        },
        {
            title: "Vorgesehenen Platz sauber machen",
            checked: false,
            experienceGain: 20,
            exp: "small",
        },
    ]
    constructor() {}

    ngOnInit() {}
}
