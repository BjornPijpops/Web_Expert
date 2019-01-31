import { Component, OnInit, NgModule } from '@angular/core';
import { NumberService } from '../services/numberservice.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  providers: [NumberService]
})

export class CompBComponent implements OnInit {
  id:number;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  generate() {
    this.service.increaseId();
    this.id = this.service.getId();
  }

}
