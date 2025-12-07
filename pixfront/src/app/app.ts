import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pixfront');
  menuOpen = false;
  
  formData: FormData = {
    name: '',
    email: '',
    message: ''
  };
  
  projects: Project[] = [
    {
      title: 'RETRO_GAME',
      description: 'A pixel-perfect arcade game built with Canvas API',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%232a2a2a"/%3E%3Crect x="100" y="80" width="40" height="40" fill="%2300ff00"/%3E%3Crect x="160" y="80" width="40" height="40" fill="%2300ff00"/%3E%3Crect x="100" y="140" width="100" height="40" fill="%2300ff00"/%3E%3Crect x="260" y="80" width="40" height="40" fill="%23ff10f0"/%3E%3Crect x="220" y="140" width="80" height="40" fill="%23ff10f0"/%3E%3Ctext x="200" y="240" font-family="monospace" font-size="20" fill="%2300ff00" text-anchor="middle"%3EGAME.EXE%3C/text%3E%3C/svg%3E',
      tags: ['JS', 'CANVAS', 'PIXELS']
    },
    {
      title: 'NEON_SITE',
      description: 'Cyberpunk themed e-commerce platform',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%231a1a1a"/%3E%3Crect x="50" y="50" width="300" height="200" fill="%232a2a2a" stroke="%23ff10f0" stroke-width="4"/%3E%3Crect x="70" y="70" width="80" height="80" fill="%23ff10f0"/%3E%3Crect x="160" y="70" width="80" height="80" fill="%2300ff00"/%3E%3Crect x="250" y="70" width="80" height="80" fill="%23ff10f0"/%3E%3Crect x="70" y="160" width="260" height="20" fill="%2300ff00"/%3E%3Crect x="70" y="190" width="260" height="20" fill="%2300ff00"/%3E%3C/svg%3E',
      tags: ['REACT', 'NODE', 'STRIPE']
    },
    {
      title: 'TERMINAL_CLI',
      description: 'Interactive command-line portfolio interface',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23000000"/%3E%3Ctext x="10" y="30" font-family="monospace" font-size="14" fill="%2300ff00"%3E%3E USER@TERMINAL:~$%3C/text%3E%3Ctext x="10" y="60" font-family="monospace" font-size="14" fill="%2300ff00"%3E%3E ls -la%3C/text%3E%3Ctext x="10" y="90" font-family="monospace" font-size="12" fill="%23808080"%3Edrwxr-xr-x projects%3C/text%3E%3Ctext x="10" y="110" font-family="monospace" font-size="12" fill="%23808080"%3Edrwxr-xr-x skills%3C/text%3E%3Ctext x="10" y="130" font-family="monospace" font-size="12" fill="%23808080"%3E-rw-r--r-- about.txt%3C/text%3E%3Crect x="10" y="145" width="10" height="15" fill="%2300ff00"/%3E%3C/svg%3E',
      tags: ['CLI', 'BASH', 'ZSH']
    },
    {
      title: 'PIXEL_API',
      description: 'RESTful API with retro documentation',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%232a2a2a"/%3E%3Crect x="50" y="50" width="300" height="40" fill="%2300ff00"/%3E%3Ctext x="200" y="78" font-family="monospace" font-size="18" fill="%23000000" text-anchor="middle"%3EAPI v1.0%3C/text%3E%3Crect x="50" y="110" width="300" height="30" fill="%231a1a1a" stroke="%2300ff00" stroke-width="2"/%3E%3Ctext x="60" y="132" font-family="monospace" font-size="12" fill="%2300ff00"%3EGET /users%3C/text%3E%3Crect x="50" y="150" width="300" height="30" fill="%231a1a1a" stroke="%23ff10f0" stroke-width="2"/%3E%3Ctext x="60" y="172" font-family="monospace" font-size="12" fill="%23ff10f0"%3EPOST /auth%3C/text%3E%3Crect x="50" y="190" width="300" height="30" fill="%231a1a1a" stroke="%2300ff00" stroke-width="2"/%3E%3Ctext x="60" y="212" font-family="monospace" font-size="12" fill="%2300ff00"%3EDELETE /data%3C/text%3E%3C/svg%3E',
      tags: ['EXPRESS', 'MONGO', 'JWT']
    },
    {
      title: 'GLITCH_ART',
      description: 'Generative art with glitch aesthetics',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Crect width="20" height="20" fill="%231a1a1a"/%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="%23808080" stroke-width="0.5"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23grid)"/%3E%3Crect x="80" y="60" width="240" height="180" fill="%23ff10f0" opacity="0.7"/%3E%3Crect x="100" y="80" width="200" height="140" fill="%2300ff00" opacity="0.7"/%3E%3Crect x="120" y="100" width="160" height="100" fill="%23000000" opacity="0.5"/%3E%3C/svg%3E',
      tags: ['P5JS', 'WEBGL', 'SHADER']
    },
    {
      title: 'BIT_CHAT',
      description: '8-bit styled real-time chat application',
      image: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%231a1a1a"/%3E%3Crect x="30" y="30" width="340" height="240" fill="%232a2a2a" stroke="%2300ff00" stroke-width="3"/%3E%3Crect x="50" y="50" width="200" height="30" fill="%2300ff00"/%3E%3Ctext x="60" y="72" font-family="monospace" font-size="12" fill="%23000000"%3EUSER1: HELLO!%3C/text%3E%3Crect x="150" y="90" width="200" height="30" fill="%23ff10f0"/%3E%3Ctext x="160" y="112" font-family="monospace" font-size="12" fill="%23000000"%3EUSER2: HI THERE%3C/text%3E%3Crect x="50" y="130" width="220" height="30" fill="%2300ff00"/%3E%3Ctext x="60" y="152" font-family="monospace" font-size="12" fill="%23000000"%3EUSER1: HOW ARE YOU?%3C/text%3E%3Crect x="50" y="230" width="300" height="30" fill="%23000000" stroke="%2300ff00" stroke-width="2"/%3E%3C/svg%3E',
      tags: ['SOCKET', 'REDIS', 'DOCKER']
    }
  ];
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu(): void {
    this.menuOpen = false;
  }
  
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    
    alert('MESSAGE SENT YOU ARE DOOMED!');
    
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}