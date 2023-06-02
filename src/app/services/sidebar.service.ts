import { Injectable, signal } from '@angular/core';

const initialMenu = [
  {
    titulo: 'Dashboard',
    icon: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Main', url: '/' },
      { titulo: 'ProgressBar', url: 'progress' },
      { titulo: 'Gráficas', url: 'grafica1' },
      { titulo: 'Promesas', url: 'promesas' },
      { titulo: 'Rxjs', url: 'rxjs' },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu = signal(initialMenu);

  constructor() {}
}
