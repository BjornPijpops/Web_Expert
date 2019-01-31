import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Contact> = new EventEmitter();
  @Input() contact: Contact;

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(this.contact ? this.contact.name : null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(this.contact ? this.contact.email : null, [Validators.required, Validators.pattern("[a-z0-9_\.]+@[a-z0-9_\.]+")]),
      'phone': new FormControl(this.contact ? this.contact.phone : null, [Validators.required, Validators.minLength(9)]),
      'isFavorite': new FormControl(this.contact ? this.contact.isFavorite : false),
      'avatar': new FormControl(this.contact ? this.contact.avatar : null),
    })
  }

  submit(form) {
    let contact: Contact = new Contact(
      form.value.name,
      form.value.email,
      form.value.phone,
      form.value.isFavorite,
      form.value.avatar,
    );
    form.reset();
    this.onSubmit.emit(contact);
  }

}
