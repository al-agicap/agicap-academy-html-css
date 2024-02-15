import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleWithFlipperComponent } from "../../flipper/example-with-flipper/example-with-flipper.component";
import { FlipperCardModule } from "@agicap/flipper/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-shadow-dom",
  standalone: true,
  imports: [CommonModule, ExampleWithFlipperComponent, FlipperCardModule, MatButtonModule],
  templateUrl: "./shadow-dom.component.html",
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ["./shadow-dom.component.scss"]
})
export class ShadowDomComponent {

}
