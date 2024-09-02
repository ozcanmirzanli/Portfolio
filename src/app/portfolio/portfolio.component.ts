import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'assets/img/join.png',
      imageAlt: 'join',
      reverseClass: '',
    },
    {
      title: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'assets/img/polloloco.png',
      imageAlt: 'polloloco',
      reverseClass: 'row-reverse',
    },
    {
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'assets/img/pokedex.png',
      imageAlt: 'pokedex',
      reverseClass: '',
    },
  ];
}
