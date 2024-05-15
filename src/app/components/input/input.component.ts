import {
  Component,
  Input,
  InputSignal,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, OnChanges {
  @Input()
  monInputSignal: any;

  ngOnInit() {
    // this.monInputSignal.set(12);
  }

  ngOnChanges(changes: SimpleChanges) {}

  /**
   * DEMO :
   * CONCEPT : "InputSignal<number>" = input<number>(), Readonly (this.monInputSignal.set()), Suppression de "ngOnChanges"
   * [monInputSignal]="100"
   * input.required<number>();
   * input(999, {alias: 'ageDuCaptaine'});
   */
}
