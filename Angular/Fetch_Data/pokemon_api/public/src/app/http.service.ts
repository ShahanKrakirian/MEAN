import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

   getPokemon(){
     this._http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe(data => {
       console.log("Bulbasaur can learn", data.abilities[0].ability.name, "and", data.abilities[1].ability.name, "!");
       this._http.get(data.abilities[0].ability.url).subscribe(ability=>{
        console.log("Pokemon that can learn chlorophyll:");
        for (var index in ability.pokemon){
          console.log(ability.pokemon[index].pokemon.name);
        }
       })
      });
   }
}
