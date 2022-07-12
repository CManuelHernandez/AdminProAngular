import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'DashBoard', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graph', url: 'grafica1' },
      ],
    },
  ];

  constructor() {}
}
