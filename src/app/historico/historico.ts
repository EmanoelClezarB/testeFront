import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [],
  templateUrl: './historico.html',
  styleUrl: './historico.css'
})
export class HistoricoComponent implements OnInit {
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

  goToSobre() {
    this.router.navigate(['/sobre']);
  }

  openChat(date: string) {
    console.log('Abrindo chat de:', date);
    this.router.navigate(['/']);
  }

  private checkMobile() {
    if (window.innerWidth <= 768) {
      this.menuToggleDisplay = 'block';
    } else {
      this.menuToggleDisplay = 'none';
    }
  }
}
