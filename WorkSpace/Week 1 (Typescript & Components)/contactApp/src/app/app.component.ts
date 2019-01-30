import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myContact: Contact;

  ngOnInit() {
    this.myContact = new Contact(
      'John Doe',
      'john.doe@gmail.com',
      '01166424893',
      true,
      'assets/avater.png'
    );
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }
}
