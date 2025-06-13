import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
   standalone: true,
  imports: [FormsModule,CommonModule],
templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log("Message sent:", this.contact);
    alert("Message sent! Thank you.");
    this.contact = { name: '', email: '', message: '' };
  }
}
