import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ExampleNewComponent} from "./example-new/example-new.component";
import {ExampleComponent} from "./example/example.component";

@Component({
    selector: 'app-html-css-best-pratices',
    standalone: true,
    imports: [CommonModule, ExampleComponent, ExampleNewComponent],
    templateUrl: './html-css-best-pratices.component.html',
    styleUrls: ['./html-css-best-pratices.component.scss']
})
export class HtmlCssBestPraticesComponent {

}
