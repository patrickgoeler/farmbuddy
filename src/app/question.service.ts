import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class QuestionService {
    public name: string
    public email: string
    public pw: string

    constructor() {}
}
