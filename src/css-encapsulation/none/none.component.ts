import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleWithFlipperComponent } from "../../flipper/example-with-flipper/example-with-flipper.component";
import { FlipperCardModule } from "@agicap/flipper/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-none",
  standalone: true,
  imports: [CommonModule, ExampleWithFlipperComponent, FlipperCardModule, MatButtonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./none.component.html",
  styleUrls: ["./none.component.scss"]
})
export class NoneComponent {

}
