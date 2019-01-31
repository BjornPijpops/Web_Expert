import { Component, OnInit, NgModule } from '@angular/core';
import { NumberService } from '../services/numberservice.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
  providers: [NumberService]
})

export class CompCComponent implements OnInit {
  id:number;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  generate() {
    this.service.increaseId();
    this.id = this.service.getId();
  }

}
