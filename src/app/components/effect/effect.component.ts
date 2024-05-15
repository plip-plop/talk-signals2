import {
  Component,
  EffectRef,
  Injector,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './effect.component.html',
})
export class EffectComponent implements OnInit {
  monEffectSignal = signal(0);
  effectRef?: EffectRef;

  constructor(private injector: Injector) {
    effect(() => {
      console.log(`Ecoute initiale (constructor) : ${this.monEffectSignal()}`);
    });
  }

  ngOnInit() {
    /**
     * effect() can only be used within an injection context such as a constructor, a factory function,
     * a field initializer, or a function used with `runInInjectionContext`
     */
  }

  handleUpdateSignal() {
    this.monEffectSignal.update((value) => value + 1);
  }

  handleNewEffect() {
    effect(
      () => {
        console.log(`Nouvelle écoute : ${this.monEffectSignal()}`);
      },
      { injector: this.injector }
    );
  }

  handleDestroyEffect() {
    this.effectRef?.destroy();
  }

  /**
   * DEMO :
   * CONCEPT : Réaction aux changements.
   * Effect : Assignable à une property.
   * Déclenchable à tout moment : { injector: this.injector }
   * Destructible : Assigner effect à "this.effectRef = "
   */
}
