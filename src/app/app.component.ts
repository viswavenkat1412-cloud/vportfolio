import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Project {
  name: string;
  tag: string;
  points: string[];
}

interface SkillGroup {
  label: string;
  items: string[];
}

interface Experience {
  role: string;
  org: string;
  type: string;
  points: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  readonly nav = ['Work', 'Skills', 'Experience', 'Contact'];

  readonly projects: Project[] = [
    {
      name: 'EV Battery Anomaly Detection',
      tag: 'Python · Machine Learning',
      points: [
        'Built an anomaly detection system using KNN, One-Class SVM, and Isolation Forest to catch abnormal battery behaviour during charging.',
        'Compared model performance on the same dataset to identify the best approach for fault detection.',
        'Applied predictive-maintenance concepts to flag issues before failure.',
      ],
    },
    {
      name: 'Quality Control Chart',
      tag: 'Python · Statistical Process Control',
      points: [
        'Built a Python application for Statistical Process Control (SPC) analysis.',
        'Implemented variable and attribute control charts for manufacturing control.',
        'Automated report generation and email notification after every analysis run.',
      ],
    },
  ];

  readonly skills: SkillGroup[] = [
    { label: 'Programming', items: ['Python', 'OOP', 'Data Structures & Algorithms'] },
    { label: 'Libraries', items: ['NumPy', 'Pandas', 'Matplotlib', 'Tkinter'] },
    { label: 'Web', items: ['HTML', 'CSS'] },
    { label: 'Data', items: ['MySQL'] },
    { label: 'Engineering CAD', items: ['SolidWorks', 'Creo', 'AutoCAD'] },
    { label: 'Tools', items: ['GitHub'] },
  ];

  readonly experience: Experience[] = [
    {
      role: 'Prototyping Intern',
      org: 'Schneider',
      type: 'Internship',
      points: [
        'Gained hands-on exposure to prototyping and product development processes.',
        'Worked across manufacturing and engineering concepts for prototype development.',
      ],
    },
    {
      role: 'Certified SolidWorks Associate (CSWA)',
      org: 'Dassault Systèmes',
      type: 'Training · 2025',
      points: [
        'Practiced part modelling — from sketches to finished features.',
        'Built multi-part assemblies, applying mates and constraints to model complete mechanisms.',
      ],
    },
  ];

  readonly certifications = [
    'Certified SolidWorks Associate (CSWA) — Dassault Systèmes, 2025',
    'Python — Live Wire, 2025',
  ];

  readonly currentYear = new Date().getFullYear();
}