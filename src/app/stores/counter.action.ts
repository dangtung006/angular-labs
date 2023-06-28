import { createAction, props } from "@ngrx/store";

export const increment = createAction("[counter action] Inc");
export const decrement = createAction("[counter action] Dec");
export const multiplyBy = createAction("[counter action] multiply by", props<{ multiplier : number}>());
export const multiplyBySuccess = createAction("[counter action] multiply by success", props<{ value : number}>() )
