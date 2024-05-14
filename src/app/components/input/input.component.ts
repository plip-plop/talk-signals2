import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  monInputSignal: InputSignal<number | undefined> = input<number>();
  autreInputSignal: InputSignal<number> = input(1);

  /**
   * DEMO :
   * CONCEPT : Readonly (this.monInputSignal.set(1)), Suppression de "ngOnChanges"
   * [monInputSignal]="100"
   * input.required<number>();
   * input(999, {alias: 'ageDuCaptaine'});
   */
}
