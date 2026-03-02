import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class Careers {
  benefits = [
    {
      icon: '🏠',
      title: 'Remote First',
      desc: 'Work from anywhere. We believe in flexibility and trust.',
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      desc: '$2,000/year for courses, certifications, and conferences.',
    },
    {
      icon: '🏥',
      title: 'Health Coverage',
      desc: 'Comprehensive health, dental, and vision insurance.',
    },
    {
      icon: '🏖️',
      title: 'Unlimited PTO',
      desc: 'Take the time you need. We trust you to manage your schedule.',
    },
    {
      icon: '💻',
      title: 'Top Equipment',
      desc: 'Choose your setup. We provide the best tools for the job.',
    },
    {
      icon: '📈',
      title: 'Growth Path',
      desc: 'Clear career progression with regular reviews and mentorship.',
    },
  ];

  openings = [
    {
      title: 'Senior .NET Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      tags: ['C#', '.NET 8', 'Azure', 'SQL Server'],
    },
    {
      title: 'Azure Cloud Engineer',
      department: 'DevOps',
      location: 'Remote',
      type: 'Full-time',
      tags: ['Azure', 'Terraform', 'Kubernetes', 'CI/CD'],
    },
    {
      title: 'WordPress Developer',
      department: 'Web',
      location: 'Remote',
      type: 'Full-time',
      tags: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript'],
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      tags: ['Angular', 'React', '.NET', 'TypeScript'],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'Research'],
    },
  ];

  toggleOpening(index: number) {
    // Simple toggle for expanding details
  }
}
