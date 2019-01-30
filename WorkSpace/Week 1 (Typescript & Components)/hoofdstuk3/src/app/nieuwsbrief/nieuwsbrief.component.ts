import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwsbrief',
  templateUrl: './nieuwsbrief.component.html',
  styleUrls: ['./nieuwsbrief.component.css']
})
export class NieuwsbriefComponent implements OnInit {
  private email: string;

  constructor() { }

  ngOnInit() {
    this.email = "";
  }

  verwerk(){
    
  }

}
