import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListBusComponent } from './Bus/list-bus/list-bus.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateBusComponent } from './Bus/create-bus/create-bus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ListBusComponent,CreateBusComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GestionTransporteFrontEnd';
}
