import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  constructor() {}

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrenTheme();
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrenTheme();
  }

  checkCurrenTheme() {
    this.links.forEach((ele) => {
      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currenTheme) {
        ele.classList.add('working');
      }
    });
  }
}
