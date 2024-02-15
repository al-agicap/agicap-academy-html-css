import {FlipperCardModule} from "@agicap/flipper/card";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FlipperDatepickerModule } from "@agicap/flipper/datepicker";

@Component({
  selector: 'app-example-with-flipper',
  standalone: true,
  imports: [CommonModule, FlipperCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FlipperDatepickerModule],
  templateUrl: './example-with-flipper.component.html',
  styleUrls: ['./example-with-flipper.component.scss']
})
export class ExampleWithFlipperComponent {

  public transactionAmount = 3;
  public transactionDate = new Date();

}
