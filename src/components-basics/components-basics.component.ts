import {CommonModule} from "@angular/common";
import {AfterViewChecked, Component} from "@angular/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from "@angular/material/snack-bar";
import {HighlightService} from "../services/highlight.service";
import {MyCardComponent} from "./my-card/my-card.component";
import {TransactionFormComponent} from "./transaction-form/transaction-form.component";

@Component({
    selector: "app-components-basics",
    standalone: true,
    imports: [CommonModule, TransactionFormComponent, MatSnackBarModule, MatExpansionModule, MyCardComponent],
    templateUrl: "./components-basics.component.html",
    styleUrls: ["./components-basics.component.scss"],
    providers: [HighlightService, MatSnackBarConfig]
})
export class ComponentsBasicsComponent implements AfterViewChecked {

    public billingDate = new Date();

    public transactionAmount = 1000;

    public componentTemplate = "<app-transaction-form (validate)=\"validate($event)\" [billingDate]=\"billingDate\" transactionAmount=\"1000\"></app-transaction-form>";
    contentProjectionTemplate: string = `
    <-- my card component -->
    <header>
        <ng-content select="[title]"></ng-content>
    </header>
    <div class="content">
        <ng-content></ng-content>
    </div>
    <footer></footer>


    <-- parent component -->
    <app-my-card>
        <div title>Title</div>
        <div class="content">Content</div>
    </app-my-card>
  `;

    constructor(private snack: MatSnackBar, private highlightService: HighlightService) {
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }

    public validate(): void {
        this.snack.open("Validation completed", "Close", {});
    }

}
