import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
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
