import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectComponent } from './components/effect/effect.component';
import { EqualityComponent } from './components/equality/equality.component';
import { InputComponent } from './components/input/input.component';
import { InteropComponent } from './components/interop/interop.component';
import { ModelComponent } from './components/model/model.component';
import { OutputComponent } from './components/output/output.component';

/**
 * signal():
 * Constructor. Doit avoir une valeur initiale (possiblement null/undefined).
 * Renvoie un Signal est de type "WritableSignal".
 * Il peut être modifié grâce à 2 méthodes: "set()" et "update()".
 * 
 * computed():
 * Signal dérivé d'autres Signals.
 * Renvoie un Signal est de type "Signal". Il ne peut pas être modifié.
 * 
 * Tous les Signals sont typables.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MatButtonModule,
    InputComponent,
    OutputComponent,
    ModelComponent,
    EffectComponent,
    EqualityComponent,
    InteropComponent,
  ],
})
export class AppComponent {
  monSignal: WritableSignal<number> = signal<number>(0);
  boolSignal: WritableSignal<boolean> = signal<boolean>(true);

  monComputedSignal: Signal<number> = computed(() =>
    this.monSignal() * 10
  );

  setSignal() {
    this.monSignal.set(0);
  }

  incrementerSignal() {
    this.monSignal.update((value) => value + 1);
    // Valide, mais moins élégant: this.monSignal.set(this.monSignal() + 1);
  }

  emittedSignal(value: string) {
    console.log(`output() - Le parent reçoit comme valeur: ${value}`);
  }

  handleChangeOfModel(value: boolean) {
    console.log(`model() - Le parent reçoit comme valeur: ${value}`);
  }

  computedCantChange() {
    // this.monComputedSignal.set(0);
    // this.monComputedSignal.update((value) => value + 1);
  }

  /**
   * CONCEPT :
   * Init (WritableSignal VS Signal).
   * set()/update()/computed()
   * 
   * 1 - Input.
   * 2 - Output.
   * 3 - Model.
   * 4 - Effect.
   * 5 - Inter-operability (RxJS).
   * 6 - Equality.
   */
}
