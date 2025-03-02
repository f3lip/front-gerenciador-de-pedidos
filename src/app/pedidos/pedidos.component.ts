import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pedidos } from './pedidos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from './pedidos.service';
import { CadastroComponent } from './cadastro/cadastro.component';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos: Pedidos[] = [];

    constructor(private modalService: NgbModal, private pedidosService: PedidosService) {}

    openModalCadastrarPedido() {
      this.modalService.open(CadastroComponent);
    }

    ngOnInit(): void {
      this.pedidosService.listPedidos().subscribe(data => {
        this.pedidos = data;
      });
    }
}
