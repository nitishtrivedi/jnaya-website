import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  values = [
    {
      icon: '◆',
      title: 'Precision Engineering',
      description:
        'Every line of code is crafted with intention. We build systems that are robust, scalable, and maintainable for years to come.',
    },
    {
      icon: '◇',
      title: 'Client Partnership',
      description:
        'We become an extension of your team, deeply understanding your challenges and aligning our solutions with your goals.',
    },
    {
      icon: '▲',
      title: 'Innovation First',
      description:
        'We leverage cutting-edge technologies and methodologies to deliver solutions that keep you ahead of the competition.',
    },
    {
      icon: '●',
      title: 'Transparent Process',
      description:
        'Clear communication, honest timelines, and visible progress — from the first meeting to deployment and beyond.',
    },
    {
      icon: '✦',
      title: 'Quality Obsessed',
      description:
        'Comprehensive testing, code reviews, and performance optimization are built into every phase of our development process.',
    },
    {
      icon: '◈',
      title: 'Continuous Growth',
      description:
        'Our team invests in learning and certification, staying current with the latest advancements in technology.',
    },
  ];

  team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', initials: 'AJ' },
    { name: 'Sarah Chen', role: 'CTO', initials: 'SC' },
    { name: 'Michael Park', role: 'Lead Architect', initials: 'MP' },
    { name: 'Emily Davis', role: 'Design Director', initials: 'ED' },
  ];

  timeline = [
    {
      year: '2013',
      title: 'Founded',
      desc: 'Jnaya LLC was established with a vision to deliver premium software solutions.',
    },
    {
      year: '2016',
      title: 'Azure Partnership',
      desc: 'Became a certified Microsoft Azure Solutions Partner.',
    },
    {
      year: '2019',
      title: '100th Project',
      desc: 'Delivered our 100th successful project milestone.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      desc: 'Expanded operations to serve clients across 3 continents.',
    },
    {
      year: '2025',
      title: 'AI Integration',
      desc: 'Launched AI-powered development services and consulting.',
    },
  ];
}
