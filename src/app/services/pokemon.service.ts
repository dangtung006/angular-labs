import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Pokemon[]{
    return [
      { id : 1, name : "Pikachu", type : "electric", isCool : true},
      { id : 2, name : "Squirttle", type : "water", isCool : false},
      { id : 3, name : "Charmander", type : "water", isCool : false }
    ]
  }
}
