import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { ModelComponent } from './components/model/model.component';
import { EffectComponent } from './components/effect/effect.component';
import { EqualityComponent } from './components/equality/equality.component';
import { InteropComponent } from './components/interop/interop.component';

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
  monComputedSignal: Signal<string> = computed(() =>
    this.monSignal() % 2 === 0 ? 'Hello' : 'World'
  );

  setSignal() {
    this.monSignal.set(0);
  }

  updateSignal() {
    this.monSignal.update((value) => value + 1);
  }

  emittedSignal(value: string) {
    console.log(`EmittedSignal = ${value}`);
  }

  /**
   * DEMO :
   * CONCEPT : Init (WritableSignal VS Signal).
   * set()/update()/computed()
   * 1 - Input.
   * 2 - Output.
   * 3 - Model.
   * 4 - Effect.
   * 5 - Inter-operability (RxJS).
   * 6 - Equality.
   */
}
