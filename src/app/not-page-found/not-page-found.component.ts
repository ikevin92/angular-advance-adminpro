import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-page-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-page-found.component.html',
  styleUrls: ['./not-page-found.component.css'],
})
export class NotPageFoundComponent {
  year = signal(new Date().getFullYear());
}
