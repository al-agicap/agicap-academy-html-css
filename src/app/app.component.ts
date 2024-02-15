import {Component, ViewEncapsulation} from "@angular/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {ExampleDirectivesComponent} from "../example-directives/example-directives.component";
import {FlipperComponent} from "../flipper/flipper.component";
import {HtmlCssBestPraticesComponent} from "../html-css-best-pratices/html-css-best-pratices.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./app.component.scss"],
    imports: [MatExpansionModule, MatTabsModule, ExampleDirectivesComponent, FlipperComponent, HtmlCssBestPraticesComponent]
})
export class AppComponent {

}
