import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClientesService } from './clientes.service';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[] = [];

  constructor(private modalService: NgbModal, private clientesService: ClientesService) {}

  openModalCadastrarCliente() {
    this.modalService.open(CadastroComponent);
  }

  ngOnInit(): void {
    this.clientesService.listClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}
