import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pedidos } from './pedidos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from './pedidos.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos: Pedidos[] = [];

    constructor(private modalService: NgbModal, private pedidosService: PedidosService, private toastr: ToastrService) {}

    openModalCadastrarPedido() {
      this.modalService.open(CadastroComponent);
    }

    ngOnInit(): void {
      this.pedidosService.listPedidos().subscribe(data => {
        this.pedidos = data;
      });
    }

    finalizarPedido(event: any) {
      this.pedidosService.finalizarPedido(event).subscribe({
        next: () => {
          this.toastr.success('Pedido finalizado com sucesso!');
        },
        error: (error) => {
          this.toastr.error('Erro ao enviar dados', error);
        }
      });
    }

    cancelarPedido(event: any) {
      this.pedidosService.cancelarPedido(event).subscribe({
        next: () => {
          this.toastr.success('Pedido cancelado com sucesso!');
        },
        error: (error) => {
          this.toastr.error('Erro ao enviar dados', error);
        }
      });
    }

    editarPedido(pedido: any) {
      const modalRef = this.modalService.open(CadastroComponent);
      modalRef.componentInstance.pedido = pedido;
      modalRef.componentInstance.isEditar = true;
    }

    excluirPedido(event: any) {
      this.pedidosService.excluirPedido(event).subscribe({
        next: () => {
          this.toastr.success('Pedido excluído com sucesso!');
        },
        error: (error) => {
          this.toastr.error('Erro ao enviar dados', error);
        }
      });
    }
}
