import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening1';
  username = "";

  isDisabled(): Boolean{
    if (this.username === "") {
      return true;
    } else {
      return false;
    }
  }

  clearUsername() {
    this.username = "";
  }
  
}
