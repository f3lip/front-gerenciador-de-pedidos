import { Component } from '@angular/core';
import { ClientesmaisativosComponent } from "./clientesmaisativos/clientesmaisativos.component";
import { PedidospendentesComponent } from "./pedidospendentes/pedidospendentes.component";
import { ResumovendasComponent } from "./resumovendas/resumovendas.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, ClientesmaisativosComponent, PedidospendentesComponent, ResumovendasComponent],
  templateUrl: './relatorios.component.html',
  styleUrl: './relatorios.component.css'
})
export class RelatoriosComponent {
  isClientesMaisAtivos: boolean = false;
  isPedidosPendentes: boolean = false;
  isResumoVendas: boolean = false;

  desabilitarRelatorios() {
    this.isClientesMaisAtivos = false;
    this.isPedidosPendentes = false;
    this.isResumoVendas = false;
  }

  carregarClientesMaisAtivos() {
    this.desabilitarRelatorios();
    this.isClientesMaisAtivos = true;
  }

  carregarPedidosPendentes() {
    this.desabilitarRelatorios();
    this.isPedidosPendentes = true;
  }

  carregarResumoVendas() {
    this.desabilitarRelatorios();
    this.isResumoVendas = true;
  }
}
