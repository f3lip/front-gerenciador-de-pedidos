import { Component } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientesmaisativos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientesmaisativos.component.html',
  styleUrl: './clientesmaisativos.component.css'
})
export class ClientesmaisativosComponent {
  clientesMaisAtivos: any[] = [];

  constructor(private relatoriosService: RelatoriosService) {}
  
  ngOnInit(): void {
    this.relatoriosService.clientesMaisAtivos().subscribe(data => {
      this.clientesMaisAtivos = data;
    });
  }
}
