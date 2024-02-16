import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FlipperCalendarOverrideDirective } from "@agicap/flipper/datepicker";
import { FlipperCardModule } from "@agicap/flipper/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-grid",
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, FlipperCalendarOverrideDirective, FlipperCardModule, MatButtonModule, MatDatepickerModule, MatIconModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCardModule],
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent {

  public gridTemplateColumns = "auto auto";
  public justifyContent = "flex-start";
  public alignItems = "stretch";
  public gap = "1";

}
