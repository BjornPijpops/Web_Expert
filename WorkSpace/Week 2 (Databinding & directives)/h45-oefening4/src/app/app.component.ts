import { Component, OnInit} from '@angular/core';
import { Pokemon, Type } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'h45-oefening4';
  pokedex = Array<Pokemon>();
  selectedPokemon: string;

  ngOnInit() {
    this.selectedPokemon = "";

    this.pokedex.push(new Pokemon(1, "Bulbasaur", Type.Grass, "assets/bulbasaur.jpg"));
    this.pokedex.push(new Pokemon(2, "Ivysaur", Type.Grass, "assets/ivysaur.jpg"));
    this.pokedex.push(new Pokemon(3, "Venusaur", Type.Grass, "assets/venusaur.jpg"));
    this.pokedex.push(new Pokemon(4, "Charmander", Type.Fire, "assets/charmander.jpg"));
    this.pokedex.push(new Pokemon(5, "Charmeleon", Type.Fire, "assets/charmeleon.jpg"));
    this.pokedex.push(new Pokemon(6, "Charizard", Type.Fire, "assets/charizard.jpg"));
    this.pokedex.push(new Pokemon(7, "Squirtle", Type.Water, "assets/squirtle.jpg"));
    this.pokedex.push(new Pokemon(8, "Wartortle", Type.Water, "assets/wartortle.jpg"));
    this.pokedex.push(new Pokemon(9, "Blastoise", Type.Water, "assets/blastoise.jpg"));
  }

  getType(pokemon: Pokemon): string {
    if (pokemon.getName() === this.selectedPokemon){
      return pokemon.getType() + " Gold";
    } else {
      return pokemon.getType();
    }
    
  }

  selected(pokemon: Pokemon) {
    this.selectedPokemon = pokemon.getName();
  }
}
