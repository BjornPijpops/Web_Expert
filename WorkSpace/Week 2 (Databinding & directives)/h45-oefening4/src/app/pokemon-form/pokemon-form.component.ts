import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon, Type } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  form: FormGroup;
  types = ["Grass", "Fire", "Water"];
  nature: number;
  pokemonType: Type;

  @Output() onSubmit: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'avatarUrl': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  submit(form) {
    switch (this.nature) {
      case 0:
        this.pokemonType = Type.Grass;
        break;
      case 1:
        this.pokemonType = Type.Fire;
        break;
      case 2:
        this.pokemonType = Type.Water;
        break;
      default:
        break;
    }
    let pokemon: Pokemon = new Pokemon(
      form.value.id,
      form.value.name,
      this.pokemonType,
      form.value.avatarUrl
    )
    this.form.reset();
    this.onSubmit.emit(pokemon);
  }

}
