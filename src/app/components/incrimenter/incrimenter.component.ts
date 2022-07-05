import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrimenter',
  templateUrl: './incrimenter.component.html',
  styles: [],
})
export class IncrimenterComponent {
  @Input('value') progress: number = 50;

  @Output('value') valueOutput: EventEmitter<number> = new EventEmitter();

  changeValue(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.valueOutput.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && valor < 0) {
      this.valueOutput.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + valor;
    this.valueOutput.emit(this.progress);
  }
}
