import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model'
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: ContactService) { }

  ngOnInit() {
    
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }

  /*
  createContact(event: Contact) {
    this.service.addContactList(event).subscribe(() => this.fetchContactList(this.onlyFavorites));
  }
  */
}
