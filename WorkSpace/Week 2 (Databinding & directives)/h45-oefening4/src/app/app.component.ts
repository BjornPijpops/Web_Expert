import { Component, OnInit } from '@angular/core';
import { Pokemon, Type } from './models/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening4';
  pokedex = Array<Pokemon>();
  selectedPokemon: string;

  constructor(private service: PokemonService) {
    console.log("test");
  }

  ngOnInit() {
    this.selectedPokemon = "";
    this.pokedex = this.service.getPokedex();
    console.log(this.service.getPokedex());
  }

  getType(pokemon: Pokemon): string {
    if (pokemon.getName() === this.selectedPokemon) {
      return pokemon.getType() + " Gold";
    } else {
      return pokemon.getType();
    }

  }

  selected(pokemon: Pokemon) {
    this.selectedPokemon = pokemon.getName();
  }

  createPokemon(event: Pokemon){
    this.service.addPokemon(event);
    this.pokedex = this.service.getPokedex();
  }
}
