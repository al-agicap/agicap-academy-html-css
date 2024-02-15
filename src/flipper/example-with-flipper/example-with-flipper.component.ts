import {FlipperCardModule} from "@agicap/flipper/card";
import {FlipperDatepickerModule} from "@agicap/flipper/datepicker";
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
    selector: 'app-example-with-flipper',
    standalone: true,
    imports: [CommonModule, FlipperCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FlipperDatepickerModule],
    templateUrl: './example-with-flipper.component.html',
    styleUrls: ['./example-with-flipper.component.scss']
})
export class ExampleWithFlipperComponent {

}
