import { Component, inject, signal } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent {
  titulo = signal('');
  private router = inject(Router);

  constructor() {
    this.getArgumentosRuta();
  }

  getArgumentosRuta() {
    this.router.events
      .pipe(
        filter(
          (event): event is ActivationEnd => event instanceof ActivationEnd
        ),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(({ titulo }) => {
        this.titulo.set(titulo);
        document.title = `AdminPro  ${this.titulo()}`;
      });
  }
}
