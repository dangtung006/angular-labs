import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        PokemonListComponent,
        PokemonDetailComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PokemonBaseModule { }