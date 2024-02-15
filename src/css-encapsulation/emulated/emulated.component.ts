import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleWithFlipperComponent } from "../../flipper/example-with-flipper/example-with-flipper.component";
import { MatButtonModule } from "@angular/material/button";
import { FlipperCardModule } from "@agicap/flipper/card";

@Component({
  selector: "app-emulated",
  standalone: true,
  imports: [CommonModule, ExampleWithFlipperComponent, MatButtonModule, FlipperCardModule],
  templateUrl: "./emulated.component.html",
  styleUrls: ["./emulated.component.scss"]
})
export class EmulatedComponent {

}
