import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;

  @Output() click = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
