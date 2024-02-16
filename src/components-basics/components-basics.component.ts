import { AfterViewChecked, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightService } from "../services/highlight.service";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from "@angular/material/snack-bar";
import { TransactionFormComponent } from "./transaction-form/transaction-form.component";
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
  selector: "app-components-basics",
  standalone: true,
  imports: [CommonModule, TransactionFormComponent, MatSnackBarModule, MatExpansionModule],
  templateUrl: "./components-basics.component.html",
  styleUrls: ["./components-basics.component.scss"],
  providers: [HighlightService, MatSnackBarConfig]
})
export class ComponentsBasicsComponent implements AfterViewChecked {

  public billingDate = new Date();

  public transactionAmount = 1000;

  public componentTemplate = "<app-transaction-form (validate)=\"validate($event)\" [billingDate]=\"billingDate\" transactionAmount=\"1000\"></app-transaction-form>";

  constructor(private snack: MatSnackBar, private highlightService: HighlightService) {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  public validate(): void {
    this.snack.open("Validation completed", "Close", {});
  }

}
