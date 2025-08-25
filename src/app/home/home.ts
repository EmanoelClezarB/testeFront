import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  sidebarCollapsed = false;
  sidebarActive = false;
  menuToggleDisplay = 'none';
  chatMessage = '';

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

  goToHistory() {
    this.router.navigate(['/historico']);
  }

  goToSobre() {
    this.router.navigate(['/sobre']);
  }

  selectSuggestion(event: any) {
    this.chatMessage = event.target.textContent.trim();
  }

  sendMessage() {
    if (!this.chatMessage.trim()) return;
    console.log('Mensagem enviada:', this.chatMessage);
    alert('Mensagem enviada: ' + this.chatMessage);
    this.chatMessage = '';
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  private checkMobile() {
    if (window.innerWidth <= 768) {
      this.menuToggleDisplay = 'block';
    } else {
      this.menuToggleDisplay = 'none';
    }
  }
}
