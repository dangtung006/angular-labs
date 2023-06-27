import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';

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
    providers: [
        PokemonService
    ],
    bootstrap: []
})
export class PokemonBaseModule { }