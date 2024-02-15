import {FLIPPER_ICONS_INITIALIZER} from "@agicap/flipper/icons";
import {HttpClientModule} from "@angular/common/http";
import {Component, importProvidersFrom} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {ExampleWithFlipperComponent} from "./example-with-flipper/example-with-flipper.component";
import { ExampleComponent } from './example/example.component';
import { ExampleNewComponent } from './example-new/example-new.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-example></app-example>
    <app-example-new></app-example-new>
    <app-example-with-flipper></app-example-with-flipper>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [ExampleComponent, ExampleNewComponent, ExampleWithFlipperComponent],
})
export class App {
}

bootstrapApplication(App, {
    providers: [provideAnimations(), importProvidersFrom(HttpClientModule), FLIPPER_ICONS_INITIALIZER, ]
});
