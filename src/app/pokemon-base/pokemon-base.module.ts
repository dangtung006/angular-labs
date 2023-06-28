import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: PokemonListComponent },
        { path: ':id', component: PokemonFormComponent }
        // { path: 'form', component: PokemonFormComponent },
      ]
    }
  ];
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
        RouterModule.forChild(routes)
    ],
    exports: [
        PokemonListComponent,
        PokemonDetailComponent,
        PokemonFormComponent,
        RouterModule
    ],
    providers: [
        PokemonService
    ],
    bootstrap: []
})
export class PokemonBaseModule { }