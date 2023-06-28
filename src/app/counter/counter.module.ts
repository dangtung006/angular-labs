import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store'
import { CounterReducer } from '../stores/counter.reducer';

@NgModule({

  imports: [
    CommonModule,
    StoreModule.forFeature('counter', CounterReducer)
  ],

  exports : [
    CounterComponent
  ],
  declarations: [CounterComponent]
})
export class CounterModule { }
