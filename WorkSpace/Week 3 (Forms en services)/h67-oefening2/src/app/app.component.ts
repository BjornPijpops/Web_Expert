import { Component } from '@angular/core';
import { NumberService } from './services/numberservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h67-oefening2';
  id: number;

  constructor(private service: NumberService){}

  handleUpdate() {
    this.id = this.service.getId();
  }
}
