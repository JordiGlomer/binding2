import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterpolacionComponent } from './interpolacion.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InterpolacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InterpolacionComponent
  ]

})
export class InterpolacionModule { }
