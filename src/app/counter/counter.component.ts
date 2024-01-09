// counter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Incrémenter</button>
    <p>Compteur: {{ counterValue }}</p>
  `,
  styles: []
})
export class CounterComponent {
  @Input() counterValue: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
}

