import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {ToggleButtonComponent} from "../toggle-button/toggle-button.component";

@Component({
    selector: 'app-component-sandbox',
    standalone: true,
    imports: [CommonModule, ToggleButtonComponent, MatIconModule],
    templateUrl: './component-sandbox.component.html',
    styleUrls: ['./component-sandbox.component.scss']
})
export class ComponentSandboxComponent {
    isToggled: boolean = false;
    label: string = 'Toggle button';
}
