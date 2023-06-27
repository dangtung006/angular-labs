import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemons(): Pokemon[]{
    return [
      { id : 1, name : "Pikachu", type : "electric", isCool : true, acceptTerms : true},
      { id : 2, name : "Squirttle", type : "water", isCool : false, acceptTerms : true},
      { id : 3, name : "Charmander", type : "water", isCool : false, acceptTerms : true  }
    ]
  }
  getPokemonsApi() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon/ditto");
  }


}
