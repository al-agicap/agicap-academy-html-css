import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexComponent } from "./flex/flex.component";
import { GridComponent } from "./grid/grid.component";
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
  selector: "app-flex-grid",
  standalone: true,
  imports: [CommonModule, FlexComponent, GridComponent, MatExpansionModule],
  templateUrl: "./flex-grid.component.html",
  styleUrls: ["./flex-grid.component.scss"]
})
export class FlexGridComponent {

}
