import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso1 = signal(10);
  progreso2 = signal(50);

  getProgreso1 = computed(() => `${this.progreso1()}%`);
  getProgreso2 = computed(() => `${this.progreso2()}%`);
}
