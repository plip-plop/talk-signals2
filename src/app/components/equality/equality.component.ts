import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface User {
  id: number;
  name: string;
}

/**
 * Si on ne fournit pas une fonction "equal": L'objet/computed est réévalué à chaque "set()"
 * Si on fournit une fonction "equal": L'objet/computed est évalué 1 fois (init).
 */
@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './equality.component.html',
})
export class EqualityComponent {

  currentUser = signal<User>({ id: 0, name: 'Bruce' });
  // currentUser = signal<User>({ id: 0, name: 'Bruce' }, { equal: this.isEqual });

  name = computed(() => {
    console.log('computed()...');

    const user = this.currentUser();

    return user.name;
  });

  setObject() {
    this.currentUser.set({
      id: 0,
      name: 'Bruce',
    });
  }

  isEqual(u1: User, u2: User): boolean {
    return u1.id === u2.id && u1.name === u2.name;
  }
}
