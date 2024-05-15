import { Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import _ from 'lodash';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './equality.component.html',
})
export class EqualityComponent {
  // data = signal<string[]>([''], { equal: _.isEqual });
  data = signal<string[]>(['']);

  constructor() {
    effect(() => {
      console.log(`data a pour valeur: ${this.data()}`);
    });
  }

  setHello() {
    this.data.set(['Hello']);
  }

  setWorld() {
    this.data.set(['World']);
  }

  /**
   * DEMO :
   * Nécessite "Lodash"
   */
}
