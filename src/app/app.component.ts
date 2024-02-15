import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { ExampleDirectivesComponent } from "../example-directives/example-directives.component";
import { FlipperComponent } from "../flipper/flipper.component";
import { HtmlCssBestPraticesComponent } from "../html-css-best-pratices/html-css-best-pratices.component";
import { CssEncapsulationComponent } from "../css-encapsulation/css-encapsulation.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  imports: [MatExpansionModule, MatTabsModule, ExampleDirectivesComponent, FlipperComponent, HtmlCssBestPraticesComponent, CssEncapsulationComponent]
})
export class AppComponent {

}
