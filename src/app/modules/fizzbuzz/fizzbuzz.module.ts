import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FizzbuzzRoutingModule } from './fizzbuzz-routing.module';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';


@NgModule({
  declarations: [
    FizzbuzzComponent
  ],
  imports: [
    CommonModule,
    FizzbuzzRoutingModule
  ]
})
export class FizzbuzzModule { }
