import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmulatedComponent } from "./emulated/emulated.component";
import { ShadowDomComponent } from "./shadow-dom/shadow-dom.component";
import { NoneComponent } from "./none/none.component";

@Component({
  selector: "app-css-encapsulation",
  standalone: true,
  imports: [CommonModule, EmulatedComponent, ShadowDomComponent, NoneComponent],
  templateUrl: "./css-encapsulation.component.html",
  styleUrls: ["./css-encapsulation.component.scss"]
})
export class CssEncapsulationComponent {

}
