import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
    {
      title: 'Clinic Management System',
      description: 'A Full Stack Web Application to manage clinic operations, including user management, appointments, billing, and doctor-patient interactions.',
      tech: ['React', 'Node.js', 'HTML', 'CSS','Firebase','Winston','Vercel','Render'],
      github: 'https://github.com/Pragyagit-07/Clinic--Management--System',
    
    },
    {
      title: 'Task Manager',
      description: 'A full stack task management system that is designed for small teams to help manage their tasks efficiently. It includes essential functionalities such as user authentication, task management(CRUD) and more.',
      tech: ['Next.js', 'React', 'Node.js', 'React Hook Form', 'Zustand', 'Tailwind CSS','MongoDB','Cors','Vercel','Render'],
      github: 'https://github.com/Pragyagit-07/task-management',
      },
    {
      title: 'Note App',
      description: 'A simple note taking application built with react. It allows user to add, view and store notes locally in the browser using localstorage . The app is fully responsive and styled using plain CSS, providing a minimalist and clean UI.',
      tech: ['React','JavaScript','HTML','CSS','LocalStorage','Vercel','Render'],
      github: 'https://github.com/Pragyagit-07/note-app',
      },
      
      {
      title: 'Chat Application',
      description: 'A simple note taking application built with react. It allows user to add, view and store notes locally in the browser using localstorage . The app is fully responsive and styled using plain CSS, providing a minimalist and clean UI.',
      tech: ['HTML','CSS','JAVASCRIPT','NODEJS','WEBSCOKET', 'Socket.IO','Mongodb'],
      github: 'https://github.com/Pragyagit-07/Chat-Application',
      },
      {
      title: 'We Create',
      description: 'Welcome to We Create, your personalized product-sourcing destination. Whether it is the latest gadget, a rare home item, or a unique gift idea — just tell us what you need, and we’ll take care of the rest.',
      tech: ['HTML','CSS','JAVASCRIPT','PHP','MySQL'],
      github: 'https://github.com/Pragyagit-07/We-Create-',
      },
       {
      title: 'Medical Portal',
      description: 'The Medical Portal System is a web application designed for clinical environments to help manage patient data securely and efficiently. The system uses JWT authentication, bcrypt password hashing, and role-based access to control who can view and update patient information.',
      tech: ['HTML','CSS','JAVASCRIPT','React','Node.js', 'Express','MongoDB'],
      github: 'https://github.com/Pragyagit-07/Medical--Portal',
      },
  ];
}
