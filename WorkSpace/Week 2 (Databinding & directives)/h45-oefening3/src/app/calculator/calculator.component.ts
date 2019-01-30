import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  private number1: number;
  private number2: number;

  private sum: number;

  constructor() { }

  ngOnInit() {
    this.sum = 0;
  }

  calculateSum() {
    this.sum = this.number1 + this.number2;
  }

  hideDiv() : Boolean {
    if (this.sum === 0){
      return true;
    } else {
      return false;
    }
  }
}
