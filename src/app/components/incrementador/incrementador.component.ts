import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progresoInput: number = 50;
  @Input() btnClass: string = 'btn-primary';
  progreso = signal<number>(0);

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
    this.progreso.set(this.progresoInput);
  }

  cambiarValor(valor: number) {
    if (this.progreso() >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso.set(100);
    }

    if (this.progreso() <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso.set(0);
    }

    this.progreso.update((value) => value + valor);
    this.valorSalida.emit(this.progreso());
  }

  onChange(nuevoValor: number) {
    this.progreso.set(Number(nuevoValor));
    if (nuevoValor >= 100) this.progreso.set(100);
    if (nuevoValor <= 0) this.progreso.set(0);
    this.valorSalida.emit(this.progreso());
  }
}
