import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { IntroComponent } from "./intro/intro.component"
import { OverviewComponent } from "./overview/overview.component"

const routes: Routes = [
    {
        path: "intro",
        component: IntroComponent,
    },
    {
        path: "overview",
        component: OverviewComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
