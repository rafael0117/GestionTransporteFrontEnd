import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../Service/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isAutheticated(); // Ojo: hay un error de escritura en el nombre del método (ver más abajo)
  }

  logout(): void {
    this.authService.logout();
  }
}
