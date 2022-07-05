import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { IncrimenterComponent } from './incrimenter/incrimenter.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrimenterComponent, DonaComponent],
  exports: [IncrimenterComponent, DonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
