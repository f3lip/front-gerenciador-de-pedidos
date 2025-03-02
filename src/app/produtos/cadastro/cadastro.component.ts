import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome!: string;
  preco!: number;

  constructor(public modal: NgbActiveModal, private produtosService: ProdutosService) {}

  salvar(): void {
    this.produtosService.save(new Produtos(this.nome, this.preco)).subscribe({
      next: (response) => {
        console.log('Dados enviados com sucesso!', response);
      },
      error: (error) => {
        console.error('Erro ao enviar dados', error);
      }
    });
  }
}
