import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Graph', url: 'grafica1' },
        { titulo: 'Promises', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
      ],
    },
  ];

  constructor() {}
}
