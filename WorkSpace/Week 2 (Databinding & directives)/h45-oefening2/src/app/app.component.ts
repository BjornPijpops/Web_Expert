import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening2';
  isHidden = false;
  timestamps: Array<Number> = new Array();

  toggle() {
    this.timestamps.push(Date.now())
    if (this.isHidden){
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }
}
