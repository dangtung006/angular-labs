import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
    pokemons : Pokemon[] = [];

    constructor(private pokemonService : PokemonService){

    }

    ngOnInit(): void {
      this.pokemons = this.pokemonService.getPokemons();
      this.pokemonService.getPokemonsApi().subscribe((data: Pokemon[])=>{
        console.log("data : " , data);
      })
    }

    handleRemove(e : Pokemon){
      this.pokemons = this.pokemons.filter((pokemon : Pokemon)=>{
        return pokemon.id !== e.id
      });
    }


}
