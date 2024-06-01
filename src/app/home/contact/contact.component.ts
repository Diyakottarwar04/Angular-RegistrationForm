import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  ContactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.ContactForm = this.formBuilder.group({
      fullName: ['diya'],
      email: ['xyz@gmail.com'],
      message: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.ContactForm.value);
  }
}
