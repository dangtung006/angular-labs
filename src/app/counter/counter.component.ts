import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store'
import { selectorDecCount, selectorIncCount, selectorValue } from '../stores/counter.selector';
import { increment, decrement, multiplyBy } from '../stores/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  readonly value$    = this.store.select(selectorValue);
  readonly incCount$ = this.store.select(selectorIncCount);
  readonly decCount$ = this.store.select(selectorDecCount);
  multiplier : number = Math.floor(Math.random() * 9 + 2)

  constructor(
    private readonly store : Store
  ) { }

  ngOnInit() {}

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  multiply(){
    this.store.dispatch(multiplyBy({ multiplier : this.multiplier}));
    this.multiplier = Math.floor(Math.random() * 9 + 2);
  }
}
