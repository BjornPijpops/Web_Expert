import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[] = [
    new Contact('John Doe', 'john.doe@gmail.com', '01166424893', true, 'assets/avatar.png'),
    new Contact('Jane Doe', 'jane.doe@gmail.com', '011424839', true, 'assets/avatar.png'),
    new Contact('Dries Swinnen', 'dries.swinnen@pxl.be', '011664839', true, 'assets/avatar.png')
  ];

  ngOnInit() {
  }

  handleData(event: Contact) {
    console.log('Received data!', event);
  }
}
