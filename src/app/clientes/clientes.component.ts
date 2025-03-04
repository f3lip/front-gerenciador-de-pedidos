import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClientesService } from './clientes.service';
import { Clientes } from './clientes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[] = [];

  constructor(private modalService: NgbModal, private clientesService: ClientesService, private toastr: ToastrService) {}

  openModalCadastrarCliente() {
    this.modalService.open(CadastroComponent);
  }

  ngOnInit(): void {
    this.clientesService.listClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  editarCliente(cliente: any) {
    const modalRef = this.modalService.open(CadastroComponent);
    modalRef.componentInstance.cliente = cliente;
    modalRef.componentInstance.isEditar = true;
  }

  excluirCliente(event: any) {
    this.clientesService.excluirCliente(event).subscribe({
      next: () => {
        this.toastr.success('Cliente excluído com sucesso!');
      },
      error: (error) => {
        this.toastr.error('Erro ao enviar dados', error);
      }
    });
  }
}
