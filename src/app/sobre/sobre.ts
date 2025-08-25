import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class SobreComponent implements OnInit {
  sidebarCollapsed = false;
  sidebarActive = false;
  menuToggleDisplay = 'none';

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile();
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleMenu() {
    this.sidebarActive = !this.sidebarActive;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToHistory() {
    this.router.navigate(['/historico']);
  }

  private checkMobile() {
    if (window.innerWidth <= 768) {
      this.menuToggleDisplay = 'block';
    } else {
      this.menuToggleDisplay = 'none';
    }
  }
}
