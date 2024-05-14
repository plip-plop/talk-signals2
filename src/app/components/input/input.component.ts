import { Component, InputSignal, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  monInputSignal: InputSignal<number | undefined> = input<number>();

  ngOnInit() {}

  /**
   * DEMO :
   * CONCEPT : "InputSignal<number>" = input<number>(), Readonly (this.monInputSignal.set()), Suppression de "ngOnChanges"
   * [monInputSignal]="100"
   * input.required<number>();
   * input(999, {alias: 'ageDuCaptaine'});
   */
}
