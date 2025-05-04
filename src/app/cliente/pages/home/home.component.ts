import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar.component';
import { FooterComponent } from '../layout/footer.component';
import { DestinoService } from '../../../Service/destino.service';
import { Destino } from '../../../Interface/destino';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destinos: Destino[] = [];

  constructor(private destinoService: DestinoService) {}

  ngOnInit(): void {
    this.destinoService.obtenerDestinos().subscribe(data => {
      this.destinos = data;
    });
  }
}
