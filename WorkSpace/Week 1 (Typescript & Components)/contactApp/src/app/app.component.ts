import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model'
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[] = [];
  onlyFavorites = false;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.fetchContactList(this.onlyFavorites);
  }

  fetchContactList(onlyFavorites: boolean) {
    this.service.getContactList(onlyFavorites).subscribe(data => {
      this.contactList = data;
    })
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }

  createContact(event: Contact) {
    this.service.addContactList(event).subscribe(() => this.fetchContactList(this.onlyFavorites));
  }

  handleUpdate() {
    this.fetchContactList(this.onlyFavorites);
  }

  toggleView(onlyFavorites: boolean) {
    this.onlyFavorites = !onlyFavorites;
    this.fetchContactList(this.onlyFavorites);
  }
}
