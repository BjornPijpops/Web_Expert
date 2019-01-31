import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { EditorState } from '../models/editor-state.enum';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id: string;
  editorState: any = EditorState;
  state: EditorState;
  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private service: ContactService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getContact(this.id);
  }

  getContact(id: string){
    this.service.getContact(id).subscribe(data => this.contact = data);
  }

  toggleEditing(editing: boolean) {
    if (this.state === EditorState.null) {
      this.state = EditorState.editing;
    } else {
      this.state = EditorState.null;
    }
  }

  updateContact(contact: Contact){
    this.service.updateContact(this.id, contact).subscribe(() => {
      this.getContact(this.id);
      this.state = EditorState.updated;
      setTimeout(() => this.state = EditorState.null, 3000);
    })
  }

  deleteContact(id: string) {
    this.service.deleteContact(id).subscribe(() => {
      this.state = EditorState.deleted;
      setTimeout(() => this.router.navigateByUrl(''), 3000);
    })
  }

}
