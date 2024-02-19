import {FlipperCardModule} from "@agicap/flipper/card";
import {CommonModule} from "@angular/common";
import {AfterViewChecked, Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {ThemePalette} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from "@angular/material/snack-bar";
import {HighlightService} from "../services/highlight.service";
import {ComponentSandboxComponent} from "./component-sandbox/component-sandbox.component";
import {MyCardComponent} from "./my-card/my-card.component";
import {ToggleButtonComponent} from "./toggle-button/toggle-button.component";
import {TransactionFormComponent} from "./transaction-form/transaction-form.component";

@Component({
    selector: "app-components-basics",
    standalone: true,
    imports: [CommonModule, TransactionFormComponent, MatSnackBarModule, MatExpansionModule, MyCardComponent, FlipperCardModule, MatButtonModule, ToggleButtonComponent, ComponentSandboxComponent],
    templateUrl: "./components-basics.component.html",
    styleUrls: ["./components-basics.component.scss"],
    providers: [HighlightService, MatSnackBarConfig]
})
export class ComponentsBasicsComponent implements AfterViewChecked {

    title = "My title";
    myColor: ThemePalette = 'warn';
    marginEnabled = true;
    dateTest = 'my-data-test'
    callCount = 0;

    interpolationTemplate = `
        <h1>{{ title }}</h1>
    `;

    interpolationWithFunctionTemplate = `
        <h1>{{ textToDisplay() }}</h1>
        <p>{{ callCount }}</p>
    `;

    interpolationWithFunctionTypescript = `
        callCount = 0;
    
        public textToDisplay(): string {
            this.callCount++;
            return 'My title';
        }
    `;

    propertyBindingTemplate = `
        <button color="primary" [disabled]="true">Disabled button</button>
        <button mat-raised-button color="primary">Primary button</button>
        <button mat-raised-button [color]="myColor">Dynamic color button</button>
    `;

    eventBindingTemplate = `
        <button (click)="show('click')" (mouseenter)="show('mouseenter')">My button</button>
        <app-transaction-form (validate)="show('validate')"></app-transaction-form>
    `;

    twoWayBindingTemplate = `
        <app-toggle-button [(toggle)]="marginEnabled"></app-toggle-button>
        <p>{{ marginEnabled }}</p>
    `;

    attributeBindingTemplate: string = `
        <button mat-stroked-button data-test="validate-button">Validate</button>
        <button mat-stroked-button [attr.data-test]="dateTest" >Validate</button>
    `;

    ngClassTemplate = `
       <button mat-stroked-button (click)="marginEnabled = !marginEnabled">Toggle class</button>
    
        <flipper-card [class.flp-mt-16]="marginEnabled">
            <flipper-card-header>
                <flipper-card-title>Card title</flipper-card-title>
            </flipper-card-header>
            Card content
        </flipper-card>
    `;

    contentProjectionTemplate: string = `
        <-- my card component -->
        <div class="content">
            <ng-content></ng-content>
        </div>
    
    
        <-- parent component -->
        <app-my-card>
            <div class="content">Content</div>
        </app-my-card>
      `;

    constructor(private snack: MatSnackBar, private highlightService: HighlightService) {
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }

    public show(text: string): void {
        this.snack.open(text, "Close", {});
    }

    public textToDisplay(): string {
        this.callCount++;
        return `My title`;
    }

}
