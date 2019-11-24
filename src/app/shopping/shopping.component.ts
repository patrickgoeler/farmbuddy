import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-shopping",
    templateUrl: "./shopping.component.html",
    styleUrls: ["./shopping.component.scss"],
})
export class ShoppingComponent implements OnInit {
    shopping_list = [
        {
            title: "Kressesamen",
            checked: false,
        },
        {
            title: "Anzuchterde",
            checked: false,
        },
        {
            title: "Schaufel",
            checked: false,
        },
        {
            title: "Gieskanne",
            checked: false,
        },
    ]

    constructor() {}

    ngOnInit() {}
}
