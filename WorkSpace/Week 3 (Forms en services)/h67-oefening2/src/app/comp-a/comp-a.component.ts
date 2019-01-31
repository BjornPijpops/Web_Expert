import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/numberservice.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  providers: [NumberService]
})

export class CompAComponent implements OnInit {
  id:number;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  generate() {
    this.service.increaseId();
    this.id = this.service.getId();
  }

}
