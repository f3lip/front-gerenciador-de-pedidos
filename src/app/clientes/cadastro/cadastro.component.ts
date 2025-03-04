import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  isEditar!: boolean;
  cliente!: Clientes;

  constructor(public modal: NgbActiveModal, private clientesService: ClientesService, private toastr: ToastrService) {}

  ngOnInit(): void {
    if(this.isEditar) {
      this.nome = this.cliente.nome;
    }
  }


  salvar(): void {
    let clienteSalvar = null;
    if(this.isEditar) {
      this.cliente.nome = this.nome;
      clienteSalvar = this.cliente;
    } else {
      clienteSalvar = new Clientes(this.nome);
    }
    this.clientesService.save(clienteSalvar).subscribe({
      next: (response) => {
        this.toastr.success('Cliente ' + response.id + ' salvo com sucesso!');
        this.modal.dismiss();
      },
      error: (error) => {
        this.toastr.error('Erro ao enviar dados', error);
      }
    });
  }
}
