import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.css'],
})
export class NoPageFoundComponent {
  year = signal(new Date().getFullYear());
}
