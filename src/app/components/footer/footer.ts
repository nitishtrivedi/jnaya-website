import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: '.NET Solutions', path: '/services' },
      { label: 'Azure Cloud', path: '/services' },
      { label: 'WordPress', path: '/services' },
      { label: 'Shopify', path: '/services' },
    ],
    resources: [
      { label: 'Blog', path: '/' },
      { label: 'Case Studies', path: '/' },
      { label: 'Documentation', path: '/' },
    ],
  };
}
