import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrimenterComponent } from './incrimenter/incrimenter.component';

@NgModule({
  declarations: [IncrimenterComponent],
  exports: [IncrimenterComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
