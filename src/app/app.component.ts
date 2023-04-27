
import { Component } from '@angular/core';

interface Contact {
  name: string;
  phoneNumber: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  currentContact: Contact = { name: '', phoneNumber: '', address: '' };
  editingContact: boolean = false;

  // Function to add/update contact
  submitForm() {
    if (this.editingContact) {
      // Update contact
      const index = this.contacts.findIndex(contact => contact === this.currentContact);
      this.contacts[index] = { ...this.currentContact };
    } else {
      // Add new contact
      this.contacts.push({ ...this.currentContact });
    }

    // Clear form
    this.currentContact = { name: '', phoneNumber: '', address: '' };
    this.editingContact = false;
  }

  // Function to edit contact
  editContact(contact: Contact) {
    this.currentContact = { ...contact };
    this.editingContact = true;
  }

  // Function to delete contact
  deleteContact(contact: Contact) {
    const index = this.contacts.findIndex(c => c === contact);
    this.contacts.splice(index, 1);
  }
}
