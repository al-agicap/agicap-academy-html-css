import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { ComponentsBasicsComponent } from "../components-basics/components-basics.component";
import { CssEncapsulationComponent } from "../css-encapsulation/css-encapsulation.component";
import { ExampleDirectivesComponent } from "../example-directives/example-directives.component";
import { FlexGridComponent } from "../flex-grid/flex-grid.component";
import { FlipperComponent } from "../flipper/flipper.component";
import { HtmlCssBestPraticesComponent } from "../html-css-best-pratices/html-css-best-pratices.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  styleUrls: ["./app.component.scss"],
  imports: [MatExpansionModule, MatTabsModule, ExampleDirectivesComponent, FlipperComponent, HtmlCssBestPraticesComponent, CssEncapsulationComponent, FlexGridComponent, ComponentsBasicsComponent]
})
export class AppComponent implements OnInit {
  selectedIndex = 0;

  ngOnInit(): void {
    this.selectedIndex = Number(localStorage.getItem("selectedIndex") ?? 0);
  }

  onTabChange($event: number) {
    localStorage.setItem("selectedIndex", $event.toString());
  }
}
