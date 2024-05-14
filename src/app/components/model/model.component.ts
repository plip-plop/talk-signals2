import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule, FormsModule],
  templateUrl: './model.component.html',
})
export class ModelComponent {
  isChecked = model(false);

  toggleModelSignal() {
    this.isChecked.set(!this.isChecked());
  }

  /**
   * DEMO : ngModel/two-way data binding.
   * CONCEPT : Writable (voir Input).
   * Toujours en Preview !
   */
}
