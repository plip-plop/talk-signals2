import { Component, ModelSignal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * https://angular.dev/guide/components/inputs
 * Use model inputs when you want a component to support two-way binding. 
 * This is typically appropriate when a component exists to modify a value based on user interaction. 
 * Most commonly, custom form controls, such as a date picker or combobox, should use model inputs for their primary value.
 * 
 * model()
 * Pour la communication parent/enfant.
 * Possibilité de répondre spécifiquement au changement du model() de l'enfant avec un event (= nom du model() suffixé par "change").
 * (<nomDuSignalEnfant>Change)="maMethodeParent($event)"
 */
@Component({
  selector: 'app-model',
  standalone: true,
  imports: [MatButtonModule, MatCheckboxModule, FormsModule],
  templateUrl: './model.component.html',
})
export class ModelComponent {
  isChecked: ModelSignal<boolean> = model<boolean>(false);

  toggleModelSignal() {
    this.isChecked.set(!this.isChecked());
  }

  /**
   * CONCEPT :
   * model = two-way data binding.
   * Writable (voir Input).
   */
}
