import { Component } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';
import { Pedidos } from '../../pedidos/pedidos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedidospendentes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidospendentes.component.html',
  styleUrl: './pedidospendentes.component.css'
})
export class PedidospendentesComponent {
  pedidos: Pedidos[] = [];

  constructor(private relatoriosService: RelatoriosService) {}

  ngOnInit(): void {
    this.relatoriosService.pedidosPendentes().subscribe(data => {
      this.pedidos = data;
    });
  }
}
