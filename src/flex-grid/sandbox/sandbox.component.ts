import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-sandbox",
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: "./sandbox.component.html",
  styleUrls: ["./sandbox.component.scss"]
})
export class SandboxComponent {

}
