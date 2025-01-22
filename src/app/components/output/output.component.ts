import { MatButtonModule } from '@angular/material/button';
import { Component, OutputEmitterRef, output } from '@angular/core';
/**
 * output():
 * Equivalent à "@Output()".
 * Renvoie un Signal est de type "OutputEmitterRef". Il ne peut pas être modifié.
 * 
 * <monInput>.required<number>()
 * Rend l'alimentation de l'input obligatoire.
 * 
 * Possibilité de lui donner un alias.
 * Ex: input(999, {alias: 'ageDuCaptaine'});
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
