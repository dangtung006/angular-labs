import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  pokemon!: Pokemon
  pokemonType: PokemonType[] =[
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
]
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemon = this.pokemonService.getPokemons()[0];
    console.log(this.pokemon);
  }

  handleSubmit(object: any){
    console.log(object.value);
  }

  toggleIsCool(event: any) {
    console.log(event);
  }

}
