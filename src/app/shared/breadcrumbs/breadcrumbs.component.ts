import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo = signal('');
  public tituloSubs$?: Subscription;
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    // console.log(this.route.snapshot.children[0].data);
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({ titulo }) => {
      this.titulo.set(titulo);
      document.title = `AdminPro  ${this.titulo()}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
