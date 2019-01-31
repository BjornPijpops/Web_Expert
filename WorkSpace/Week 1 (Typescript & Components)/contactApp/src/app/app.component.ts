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

  constructor(private service: ContactService){ }

  ngOnInit() {
    this.handleUpdate();
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }

  createContact(event: Contact){
    this.service.addContactList(event);
    this.handleUpdate();
  }

  handleUpdate() {
    this.contactList = this.service.getContactList();
  }
}
