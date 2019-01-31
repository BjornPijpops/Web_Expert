import { Component, OnInit } from '@angular/core';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-afspraak-form',
  templateUrl: './afspraak-form.component.html',
  styleUrls: ['./afspraak-form.component.css']
})
export class AfspraakFormComponent implements OnInit {
  afspraken: Array<string>;


  constructor() { 
    this.afspraken = new Array<string>();
  }

  ngOnInit() {
    this.afspraken.push("ontspanning");
    this.afspraken.push("zakelijk");
    this.afspraken.push("andere");
  }

  submit(form) {
    let meeting: Meeting = new Meeting(
      form.value.omschrijving,
      form.value.datum,
      form.value.voormiddag + " " + form.value.namiddag,
      "fuck if I know how to select this",
      form.value.ja + " " + form.value.nee
    );

    console.log(meeting);
    console.log(form);
  }
}
