import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening5';
  pets = Array<string>();
  enteredPet: string;

  ngOnInit() {
    this.pets.push("Kat");
    this.pets.push("Hond");
    this.pets.push("Hamster");
    this.pets.push("Konijn");
  }

  addPet() {
    this.pets.push(this.enteredPet);
  }

  deletePet(pet: string) {
    this.pets.splice(this.pets.indexOf(pet), 1);
  }
}
