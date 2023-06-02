import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent {
  constructor() {
    const obs$ = new Observable((observer) => {
      let i = -1;
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });

    obs$.pipe(retry(2)).subscribe(
      (valor) => console.log('Subs', valor),
      (err) => console.warn('Error', err),
      () => console.info('Terminado')
    );
  }
}