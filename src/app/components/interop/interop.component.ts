import { Component, OnInit, effect, signal } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { toSignal } from '@angular/core/rxjs-interop';
import { toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-interop',
  standalone: true,
  imports: [],
  templateUrl: './interop.component.html',
})
export class InteropComponent implements OnInit {
  myObs$ = of('plop');
  mySignalFromObservable = toSignal(this.myObs$);
  mySignal = signal(0);
  myObsFromSignal$ = toObservable(this.mySignal);

  constructor() {
    this.myObsFromSignal$.pipe(tap(console.log)).subscribe();

    effect(() => {
      console.log(
        `Ecoute initiale (constructor) : ${this.mySignalFromObservable()}`
      );
    });
  }

  ngOnInit() {
    this.mySignal.set(1);
    this.mySignal.set(2);
    this.mySignal.set(3);
  }
}
