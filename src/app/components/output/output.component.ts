import { MatButtonModule } from '@angular/material/button';
import { Component, OutputEmitterRef, output } from '@angular/core';
/**
 * output():
 * Equivalent à "@Output()".
 * Renvoie un Signal est de type "OutputEmitterRef".
 */
@Component({
  selector: 'app-output',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './output.component.html',
})
export class OutputComponent {
  monOutputSignal: OutputEmitterRef<string> = output<string>();

  handleEmitSignal() {
    this.monOutputSignal.emit('Hello');
  }

  /**
   * CONCEPT :
   * OutputEmitterRef<string>  = output<string>()
   */
}
