import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlipperCalendarOverrideDirective } from "@agicap/flipper/datepicker";
import { FlipperCardModule } from "@agicap/flipper/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-transaction-form",
  standalone: true,
  imports: [CommonModule, FlipperCalendarOverrideDirective, FlipperCardModule, MatButtonModule, MatDatepickerModule,
    MatFormFieldModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.scss"]
})
export class TransactionFormComponent {

  @Input() public transactionAmount: string = "0";

  @Input() public billingDate = new Date();

  @Output() public validate: EventEmitter<void> = new EventEmitter<void>();

}
