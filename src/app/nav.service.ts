import { Injectable, ChangeDetectorRef } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class NavService {
    private hideFrame = true

    constructor() {}

    setHideFrame(value: boolean) {
        this.hideFrame = value
    }

    getHideFrame(): boolean {
        return this.hideFrame
    }
}
