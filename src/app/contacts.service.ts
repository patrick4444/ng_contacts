import { Injectable } from '@angular/core';
import {Contact} from "./contact";

@Injectable()
export class ContactsService {
  private contacts = [];
  constructor() { };
  getContacts(){
    this.contacts.push(new Contact(1, "Tidiane SIDIBE", "Nantes, France", "06000001"));
    this.contacts.push(new Contact(2, "Jean-Brice BOUTIN", "Nantes, France", "06000002"));
    this.contacts.push(new Contact(3, "Marianne POURRE", "Rennes, France", "06000003"));

    return this.contacts;
  }

}
