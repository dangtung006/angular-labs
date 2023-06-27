import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    exports: [
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonFormComponent
    ],
    providers: [
        PokemonService
    ],
    bootstrap: []
})
export class PokemonBaseModule { }