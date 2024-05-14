import { Component, effect, signal } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [],
  templateUrl: './equality.component.html',
})
export class EqualityComponent {
  data = signal<string>('', { equal: _.isEqual });

  constructor() {
    effect(() => {
      console.log(`data a pour valeur: ${this.data()}`);
    });
  }

  setHello() {
    this.data.set('Hello');
  }

  setWorld() {
    this.data.set('World');
  }

  /**
   * DEMO :
   * Nécessite "Lodash"
   */
}
