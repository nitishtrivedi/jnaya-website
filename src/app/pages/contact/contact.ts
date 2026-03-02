import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  };

  services = [
    '.NET Full Stack Development',
    'Azure Cloud Solutions',
    'WordPress Development',
    'Shopify Development',
    'Consulting & Strategy',
    'Other',
  ];

  budgets = [
    'Under $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000 – $100,000',
    '$100,000+',
    'Not sure yet',
  ];

  isSubmitted = false;

  contactInfo = [
    { icon: 'email', label: 'Email', value: 'hello@jnaya.com' },
    { icon: 'phone', label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: 'location', label: 'Location', value: 'San Francisco, CA' },
    { icon: 'hours', label: 'Hours', value: 'Mon — Fri, 9AM — 6PM PST' },
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.isSubmitted = true;

    setTimeout(() => {
      this.isSubmitted = false;
      this.formData = {
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      };
    }, 5000);
  }
}
