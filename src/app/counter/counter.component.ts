import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store'
import { selectorDecCount, selectorIncCount, selectorValue } from '../stores/counter.selector';
import { increment, decrement } from '../stores/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  readonly value$    = this.store.select(selectorValue);
  readonly incCount$ = this.store.select(selectorIncCount);
  readonly decCount$ = this.store.select(selectorDecCount);

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

}
