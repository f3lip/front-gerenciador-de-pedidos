import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../produtos';
import { ToastrService } from 'ngx-toastr';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  preco: number = 0;
  isEditar!: boolean;
  produto!: Produtos;

  constructor(public modal: NgbActiveModal, private produtosService: ProdutosService, private toastr: ToastrService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(this.isEditar) {
      this.nome = this.produto.nome;
      this.preco = this.produto.preco;
      this.cdr.detectChanges();
    }
  }

  salvar(): void {
        let produtoSalvar = null;
        if(this.isEditar) {
          this.produto.nome = this.nome;
          this.produto.preco = this.preco;
          produtoSalvar = this.produto;
        } else {
          produtoSalvar = new Produtos(this.nome, this.preco);
        }
    this.produtosService.save(produtoSalvar).subscribe({
      next: (response) => {
        this.toastr.success('Produto ' + response.id + ' salvo com sucesso!');
        this.modal.dismiss();
      },
      error: (error) => {
        this.toastr.error('Erro ao enviar dados', error);
      }
    });
  }
}
