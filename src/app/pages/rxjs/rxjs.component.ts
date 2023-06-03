import { Component } from '@angular/core';
import { Observable, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent {
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (valor) => console.log('Subs', valor),
    //     (err) => console.warn('Error', err),
    //     () => console.info('Terminado')
    //   );

    this.retornaIntervalo().subscribe((valor) => console.log(valor));
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          // i = 0;
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }
}
