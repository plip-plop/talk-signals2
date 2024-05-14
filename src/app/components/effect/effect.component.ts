import { Component, EffectRef, Injector, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './effect.component.html',
})
export class EffectComponent {
  monEffectSignal = signal(0);
  effectRef ?: EffectRef;

  constructor(private injector: Injector) {
    effect(() => {
      console.log(`Ecoute iniitiale (constructor) : ${this.monEffectSignal()}`);
    });
  }

  handleUpdateSignal() {
    this.monEffectSignal.update(value => value + 1);
  }

  handleNewEffect() {
    effect(() => {
      console.log(`Nouvelle écoute : ${this.monEffectSignal()}`);
    }, { injector: this.injector });
  }

  handleDestroyEffect() {
    this.effectRef?.destroy();
  }

  /**
   * DEMO :
   * Effect : Assignable à une property.
   * Déclenchable à tout moment : { injector: this.injector }
   * Destructible : Assigner effect à "this.effectRef = "
   */
}
