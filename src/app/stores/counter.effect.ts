import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType, concatLatestFrom } from "@ngrx/effects";
import { Store} from "@ngrx/store";
import { switchMap, map } from "rxjs/operators";
import { timer } from "rxjs"
import { selectorValue } from "./counter.selector";
import { multiplyBy, multiplyBySuccess } from "./counter.action";


@Injectable()
export class CounterEffect {

    constructor(
        private readonly store : Store,
        private readonly actions : Actions,
    ){}

    multiplyBy = createEffect(()=>this.actions.pipe(
        ofType(multiplyBy),
        concatLatestFrom(()=> this.store.select(selectorValue)),
        switchMap(([{ multiplier }, currentValue])=>{
            return timer(1000).pipe(
                map(()=> multiplyBySuccess({ value : multiplier  * currentValue}))
            )
        })
    ))

    // multiplyBy$ = createEffect(()=>
    //     this.actions.pipe(
    //         ofType(multiplyBy),
    //         concatLatestFrom(()=>this.store.select(selectorValue)),
    //         switchMap(([{ multiplier}, currentValue])=>{
    //             return timer(1000).pipe(
    //                 map( ()=> multiplyBySuccess({ value : currentValue * multiplier }))
    //             )
                
    //         })
    //     )
    // )
}