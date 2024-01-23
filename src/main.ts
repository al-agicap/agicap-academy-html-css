import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ExampleComponent } from './example/example.component';
import { ExampleNewComponent } from './example-new/example-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-example></app-example>
    <app-example-new></app-example-new>
  `,
  imports: [ExampleComponent, ExampleNewComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
