import {FlipperCardModule} from "@agicap/flipper/card";
import {CommonModule} from '@angular/common';
import {AfterViewChecked, Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {ExampleWithFlipperComponent} from "../flipper/example-with-flipper/example-with-flipper.component";
import {HighlightService} from "../services/highlight.service";

@Component({
    selector: 'app-example-directives',
    standalone: true,
    imports: [CommonModule, ExampleWithFlipperComponent, MatButtonModule, MatExpansionModule, MatDividerModule, MatListModule, FlipperCardModule],
    templateUrl: './example-directives.component.html',
    styleUrls: ['./example-directives.component.scss'],
    providers: [HighlightService]
})
export class ExampleDirectivesComponent implements AfterViewChecked {
    show = true;
    basicNgIfTemplate = `
    <button mat-stroked-button color="primary" (click)="show = !show">
        Toggle
    </button>
    <button mat-raised-button color="primary" *ngIf="show">
        Validate
    </button>
    `;

    showNgIfElse = true;
    ngIfElse = `
   <button mat-stroked-button color="primary" (click)="show = !show">
        Toggle
    </button>

    <button mat-raised-button color="primary" *ngIf="show; else cancelTemplate">
        Validate
    </button>
    <ng-template #cancelTemplate>
        <button mat-stroked-button>Cancel</button>
    </ng-template>
    `;

    showWithNgContainer = true;
    withNgContainer = `
    <button mat-stroked-button color="primary" (click)="show = !show">
        Toggle
    </button>

    <div *ngIf="show" style="border: 1px solid grey;padding: 1rem">
        <button mat-raised-button color="primary">
            Validate
        </button>
        <button mat-stroked-button>Cancel</button>
    </div>

    <ng-container *ngIf="!show">
        <button mat-raised-button color="primary">
            Validate
        </button>
        <button mat-stroked-button>Cancel</button>
    </ng-container>
`;

    ngForTemplate = `
    <mat-list role="list">
        <ng-container
                *ngFor="let label of ['Item 1', 'Item 2', 'Item 3']">
            <mat-list-item>{{ label }}</mat-list-item>
        </ng-container>
    </mat-list>
`

    ngForTemplateAdvanced = `
    <mat-list role="list">
        <ng-container
                *ngFor="let label of ['Validate', 'Cancel', 'Submit']; let i = index; let isLast = last">
            <mat-list-item>Item {{ i }}</mat-list-item>
            <mat-divider *ngIf="!isLast"></mat-divider>
        </ng-container>
    </mat-list>
`
    marginEnabled = true;
    ngClassTemplate = `
   <button mat-stroked-button (click)="marginEnabled = !marginEnabled">Toggle class</button>

    <flipper-card [class.flp-mt-16]="marginEnabled">
        <flipper-card-header>
            <flipper-card-title>Card title</flipper-card-title>
        </flipper-card-header>
        Card content
    </flipper-card>
`


    constructor(private highlightService: HighlightService) {
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }

}
