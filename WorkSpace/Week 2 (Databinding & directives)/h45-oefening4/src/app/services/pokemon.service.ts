import { Pokemon, Type } from '../models/pokemon.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
    pokedex: Pokemon[] = new Array();

    constructor() { 
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

    addPokemon(pokemon: Pokemon) {
        this.pokedex.push(pokemon);
    }

    getPokedex(): Pokemon[] {
        return this.pokedex;
    }

}