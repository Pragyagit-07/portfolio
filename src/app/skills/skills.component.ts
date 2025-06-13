import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
skills: string[] = [
  'Java',
    'Angular',
    'React',
    'Next.js',
    'Node.js',
    'PHP',
    'SQL',
    'Firebase',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Tailwind.css',
    'CSS / SCSS',
    'MongoDB',
    'Git & GitHub'
  ];
}
