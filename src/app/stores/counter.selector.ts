import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from "./counter.reducer";

export const CounterSelector  = createFeatureSelector<CounterState>("counter");
export const selectorValue    = createSelector(CounterSelector, CounterState=> CounterState.value);
export const selectorIncCount = createSelector(CounterSelector, CounterState=> CounterState.incCount);
export const selectorDecCount = createSelector(CounterSelector, CounterState=> CounterState.decCount);