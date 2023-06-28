import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store'
import { CounterReducer } from '../stores/counter.reducer';
import { EffectsModule} from "@ngrx/effects"
import { CounterEffect } from '../stores/counter.effect';

@NgModule({

  imports: [
    CommonModule,
    StoreModule.forFeature('counter', CounterReducer),
    EffectsModule.forFeature([CounterEffect])
  ],

  exports : [
    CounterComponent
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
