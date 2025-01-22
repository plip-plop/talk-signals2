import {
  Component,
  EffectRef,
  Injector,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

/**
 * effect()
 * Fonction déclenchée à chaque changement de valeur du Signal.
 * Utilisable seulement dans un contexte d'injection, ou avec "{ injector: this.injector }"
 * Renvoie un "EffectRef".
 * 
 * effectRef?: EffectRef;
 * Permet de déclencher la méthode "destroy()" pour cesser l'écoute.
 * 
 * A utiliser le moins possible.
 */
@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './effect.component.html',
})
export class EffectComponent implements OnInit {
  monEffectSignal = signal(0);
  effectRef?: EffectRef;

  constructor(private readonly injector: Injector) {
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
   * CONCEPT :
   * Déclenchable à tout moment : { injector: this.injector }
   * Destructible : Assigner effect à "this.effectRef = "
   */
}
