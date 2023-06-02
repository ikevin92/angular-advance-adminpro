import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    const promesa = new Promise((resolve, reject) => {
      if (false) resolve('Hola mundo');
      reject('algo salio mal');
    });

    promesa
      .then((mensaje) => {
        console.log('termine', mensaje);
      })
      .catch((err) => console.log(err));

    console.log('fin del init');
  }
}
