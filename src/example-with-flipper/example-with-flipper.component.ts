import {FlipperCardModule} from "@agicap/flipper/card";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-example-with-flipper',
  standalone: true,
  imports: [CommonModule, FlipperCardModule, MatIconModule, MatButtonModule],
  templateUrl: './example-with-flipper.component.html',
  styleUrls: ['./example-with-flipper.component.scss']
})
export class ExampleWithFlipperComponent {

}
