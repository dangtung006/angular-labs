import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private pokemonService: PokemonService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data : Params)=>{
      this.pokemon = this.pokemonService.getPokemons()[parseInt(data['id']) - 1];
    })
  }

  handleSubmit(object: any){
    console.log(object.value);
  }

  toggleIsCool(event: any) {
    console.log(event);
  }

  back() : void {
    this.router.navigate(['/pokemon'])
  }


}
