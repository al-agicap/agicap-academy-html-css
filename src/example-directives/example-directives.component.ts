import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ExampleWithFlipperComponent} from "../flipper/example-with-flipper/example-with-flipper.component";

@Component({
    selector: 'app-example-directives',
    standalone: true,
    imports: [CommonModule, ExampleWithFlipperComponent],
    templateUrl: './example-directives.component.html',
    styleUrls: ['./example-directives.component.scss']
})
export class ExampleDirectivesComponent {

    withFlipper = false;
    code = `
   <mat-tab-group [selectedIndex]="selectedIndex" (selectedIndexChange)="onTabChange($event)">
    <mat-tab label="HTML best practices">
        <app-html-css-best-pratices></app-html-css-best-pratices>
    </mat-tab>
    <mat-tab label="Flipper">
        <app-flipper></app-flipper>
    </mat-tab>
    <mat-tab label="CSS encapsulation">
        <app-css-encapsulation></app-css-encapsulation>
    </mat-tab>
    <mat-tab label="Directives Angular">
        <app-example-directives></app-example-directives>
    </mat-tab>
    <mat-tab label="Flex & CSS Grid">
        <app-flex-grid></app-flex-grid>
    </mat-tab>

</mat-tab-group>


    `

}
