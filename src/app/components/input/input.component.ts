import { Component, InputSignal, input } from '@angular/core';

/**
 * input():
 * Equivalent à "@Input()".
 * Renvoie un Signal est de type "InputSignal". Il ne peut pas être modifié.
 *
 * <monInput>.required<number>()
 * Rend l'alimentation de l'input obligatoire.
 *
 * Possibilité de lui passer une fonction "transform".
 * Si le Parent n'alimente pas l'input (= property binding vide), l'enfant va se baser sur son initialValue.
 * Si le parent alimente l'input avec null/undefined, l'enfant va se baser sur cette donnée.
 * Attention: La fonction "transform" est appliquée aux valeurs alimentées par le parent, mais pas à l'initialValue de l'enfant.
 * Seules les valeurs fournies par le parent (via property binding "[]") le seront.
 *
 * Possibilité de lui donner un alias.
 * Ex: input(999, {alias: 'ageDuCaptaine'});
 */
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  monInputSignal: InputSignal<number | undefined> = input<number>();

  myInputTransform = input('', {
    transform: (value: string | undefined) => {
      if (!value) {
        return 'Hello World';
      } else {
        value += ' :TRANSFORMED';
        return value;
      }
    },
  });

  /**
   * CONCEPT :
   * "InputSignal<number>" = input<number>(), Readonly (this.monInputSignal.set()), Suppression de "ngOnChanges"
   * [monInputSignal]="100"
   * input.required<number>();
   * input(999, {alias: 'ageDuCaptaine'});
   */
}
