import { MatButtonModule } from '@angular/material/button';
import {
  Component,
  EventEmitter,
  Output,
  OutputEmitterRef,
  output,
} from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Output()
  monOutputSignal = new EventEmitter<string>();

  handleEmitSignal() {
    this.monOutputSignal.emit('Hello');
  }

  /**
   * DEMO :
   * CONCEPT : OutputEmitterRef<string>  = output<string>()
   */
}
