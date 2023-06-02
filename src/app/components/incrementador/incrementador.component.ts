import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent {
  progreso = signal<number>(50);
  porcentaje = computed(() => `${this.progreso()}%`);

  cambiarValor(valor: number) {
    if (this.progreso() >= 100 && valor >= 0) {
      return this.progreso.set(100);
    }

    if (this.progreso() <= 0 && valor < 0) {
      return this.progreso.set(0);
    }

    this.progreso.update((value) => value + valor);
  }

  onFieldUpdated(value: string) {
    console.log(value);
    this.progreso.set(Number(value));
  }
}
