import { Component, ViewEncapsulation } from "@angular/core";
import { ExampleComponent } from "../example/example.component";
import { ExampleNewComponent } from "../example-new/example-new.component";
import { ExampleWithFlipperComponent } from "../example-with-flipper/example-with-flipper.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./app.component.scss"],
  imports: [ExampleComponent, ExampleNewComponent, ExampleWithFlipperComponent, MatExpansionModule, MatTabsModule]
})
export class AppComponent {

}
