import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorialRoutingModule } from './factorial-routing.module';
import { FactorialComponent } from './factorial/factorial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FactorialComponent
  ],
  imports: [
    CommonModule,
    FactorialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FactorialModule { }
