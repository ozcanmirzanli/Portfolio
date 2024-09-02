import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = [
    { name: 'HTML', image: 'assets/img/html.png', alt: 'html' },
    { name: 'CSS', image: 'assets/img/css.png', alt: 'css' },
    {
      name: 'JavaScript',
      image: 'assets/img/javascript.png',
      alt: 'javascript',
    },
    {
      name: 'TypeScript',
      image: 'assets/img/typescript.png',
      alt: 'typescript',
    },
    { name: 'Angular', image: 'assets/img/angular.png', alt: 'angular' },
    { name: 'Firebase', image: 'assets/img/firebase.png', alt: 'firebase' },
    { name: 'Git', image: 'assets/img/git.png', alt: 'git' },
    { name: 'API', image: 'assets/img/api.png', alt: 'api' },
    { name: 'Scrum', image: 'assets/img/scrum.png', alt: 'scrum' },
    {
      name: 'Material Design',
      image: 'assets/img/material_design.png',
      alt: 'material design',
    },
    {
      name: 'Continually Learning',
      image: 'assets/img/learning.png',
      alt: 'learning',
    },
  ];

  // Method to split skills into chunks (rows) of the given size
  getSkillRows(rowSize: number) {
    const rows = [];
    for (let i = 0; i < this.skills.length; i += rowSize) {
      rows.push(this.skills.slice(i, i + rowSize));
    }
    return rows;
  }
}
