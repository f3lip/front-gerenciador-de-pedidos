import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';

  constructor(public modal: NgbActiveModal, private clientesService: ClientesService) {}

  salvar(): void {
    this.clientesService.save(new Clientes(this.nome)).subscribe({
      next: (response) => {
        console.log('Dados enviados com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao enviar dados', error);
      }
    });
  }
}
