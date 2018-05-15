import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getPokemon();
    this.chlorophyll();
   }

   getPokemon(){
     let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/')
     bulbasaur.subscribe(data => {
       console.log("Bulbasaur can learn", data.abilities[0].ability.name, "and", data.abilities[1].ability.name, "!");
      });
   }

   chlorophyll(){
     let razors = this._http.get('https://pokeapi.co/api/v2/ability/34/')
     razors.subscribe(data => {
       console.log("Pokemon that can learn chlorophyll:");
       for (var index in data.pokemon){
         console.log(data.pokemon[index].pokemon.name);
       }
     })
   }
}
