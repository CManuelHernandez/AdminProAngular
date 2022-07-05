import { Component } from '@angular/core';

@Component({
  selector: 'app-incrimenter',
  templateUrl: './incrimenter.component.html',
  styles: [],
})
export class IncrimenterComponent {
  progress: number = 50;

  get getPorcentaje() {
    return `${this.progress}%`;
  }

  changeValue(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      return (this.progress = 100);
    }
    if (this.progress <= 0 && valor < 0) {
      return (this.progress = 0);
    }
    this.progress = this.progress + valor;
  }
}
