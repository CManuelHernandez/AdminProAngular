import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrimenter',
  templateUrl: './incrimenter.component.html',
  styles: [],
})
export class IncrimenterComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

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

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueOutput.emit(this.progress);
  }
}
