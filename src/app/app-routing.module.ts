import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { IntroComponent } from "./intro/intro.component"
import { OverviewComponent } from "./overview/overview.component"
import { ProfileComponent } from "./profile/profile.component"
import { ShoppingComponent } from "./shopping/shopping.component"
import { TodoComponent } from "./todo/todo.component"

const routes: Routes = [
    {
        path: "",
        component: IntroComponent,
    },
    {
        path: "overview",
        component: OverviewComponent,
    },
    {
        path: "profile",
        component: ProfileComponent,
    },
    {
        path: "shopping",
        component: ShoppingComponent,
    },
    {
        path: "todo",
        component: TodoComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
