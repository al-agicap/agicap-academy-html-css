import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-toggle-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
    @Input() toggle: boolean = false;
    @Output() toggleChange = new EventEmitter<boolean>();
    label: string = 'Toggle';

    toggleValue(event?: Event): void {
        this.toggle = !this.toggle;
        this.toggleChange.emit(this.toggle);
    }

    labelToDisplay() {
        return "";
    }
}
