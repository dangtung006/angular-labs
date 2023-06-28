import { createReducer, on } from "@ngrx/store";
import { decrement, increment, multiplyBySuccess } from "./counter.action";

export interface CounterState {
    value : number,
    incCount : number,
    decCount : number
}

export const  initialState : CounterState  = {
    value : 1,
    incCount : 0,
    decCount : 0
}

export const CounterReducer = createReducer(
    initialState,

    on(increment, state=>({
        ...state,
        value : state.value + 1,
        incCount : state.incCount + 1
    })),

    on(decrement, state=>({
        ...state,
        value : state.value -1,
        decCount : state.decCount + 1
    })),

    on(multiplyBySuccess, (state, { value })=>({
        ...state,
        value : value
    }))

)