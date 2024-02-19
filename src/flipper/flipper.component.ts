import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ExampleNewComponent} from "../html-css-best-pratices/example-new/example-new.component";
import {ExampleComponent} from "../html-css-best-pratices/example/example.component";
import {ExampleWithFlipperComponent} from "./example-with-flipper/example-with-flipper.component";

@Component({
    selector: 'app-flipper',
    standalone: true,
    imports: [CommonModule, ExampleNewComponent, ExampleWithFlipperComponent, MatButtonModule, MatIconModule, ExampleComponent],
    templateUrl: './flipper.component.html',
    styleUrls: ['./flipper.component.scss']
})
export class FlipperComponent {

}
