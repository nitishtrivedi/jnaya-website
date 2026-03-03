import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  private countersStarted = false;
  private observer: IntersectionObserver | null = null;

  stats = [
    { value: 0, target: 10, suffix: '+', label: 'Projects Delivered' },
    { value: 0, target: 99, suffix: '%', label: 'Client Satisfaction' },
    { value: 0, target: 7, suffix: '+', label: 'Years Experience' },
    { value: 0, target: 2, suffix: '+', label: 'Team Members' },
  ];

  services = [
    {
      icon: 'dotnet',
      title: '.NET Full Stack',
      description:
        'Enterprise-grade web and desktop applications built with ASP.NET Core, Blazor, WPF, and MAUI.',
      tags: ['ASP.NET Core', 'Blazor', 'WPF', 'SQL Server'],
    },
    {
      icon: 'azure',
      title: 'Azure Cloud',
      description:
        'Scalable cloud infrastructure, microservices, DevOps pipelines, and serverless solutions on Microsoft Azure.',
      tags: ['Azure Functions', 'AKS', 'DevOps', 'CosmosDB'],
    },
    {
      icon: 'wordpress',
      title: 'WordPress',
      description:
        'Custom themes, plugins, and high-performance WordPress sites for content-driven businesses.',
      tags: ['Custom Themes', 'WooCommerce', 'Plugins', 'SEO'],
    },
    {
      icon: 'shopify',
      title: 'Shopify',
      description:
        'Beautiful, conversion-optimized Shopify storefronts with custom themes and app integrations.',
      tags: ['Custom Themes', 'Liquid', 'Apps', 'Payments'],
    },
  ];

  clients = ['TechVenture', 'GlobalSync', 'DataPrime', 'NexaCore', 'CloudBridge', 'InnovateLab'];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupCounterObserver();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupCounterObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.countersStarted) {
            this.countersStarted = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 },
    );

    setTimeout(() => {
      const el = document.querySelector('.stats-section');
      if (el) this.observer!.observe(el);
    }, 500);
  }

  private animateCounters() {
    this.stats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          stat.value = stat.target;
          clearInterval(interval);
        } else {
          stat.value = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}
