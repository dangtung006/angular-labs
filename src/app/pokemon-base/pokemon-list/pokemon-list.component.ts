import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
    pokemons : Pokemon[] = []
    ngOnInit(): void {}
}
