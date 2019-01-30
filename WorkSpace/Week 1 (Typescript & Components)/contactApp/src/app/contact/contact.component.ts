import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Contact } from '../models/contact.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    @Input() contact: Contact;
    @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();

    ngOnInit() {
    }

    onClick() {
        this.onSubmit.emit(this.contact);
    }
}