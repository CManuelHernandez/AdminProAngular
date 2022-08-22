import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncrimenterComponent } from './incrimenter/incrimenter.component';
import { DonaComponent } from './dona/dona.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';

@NgModule({
  declarations: [IncrimenterComponent, DonaComponent, ModalImagenComponent],
  exports: [IncrimenterComponent, DonaComponent, ModalImagenComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
