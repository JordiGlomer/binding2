import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { BindingComponent } from './binding.component';
import {MatSelectModule} from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    CommonModule,
    BindingRoutingModule,
    MatSelectModule,
    MatDividerModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class BindingModule { }
