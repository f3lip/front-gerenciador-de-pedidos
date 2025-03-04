import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Produtos } from './produtos';
import { ProdutosService } from './produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: Produtos[] = [];

  constructor(private modalService: NgbModal, private produtosService: ProdutosService, private toastr: ToastrService) {}

  openModalCadastrarProduto() {
    this.modalService.open(CadastroComponent);
  }

  ngOnInit(): void {
    this.produtosService.listProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  editarProduto(produto: any) {
      const modalRef = this.modalService.open(CadastroComponent);
      modalRef.componentInstance.produto = produto;
      modalRef.componentInstance.isEditar = true;
    }
  
  excluirProduto(event: any) {
    this.produtosService.excluirProduto(event).subscribe({
      next: () => {
        this.toastr.success('Produto excluído com sucesso!');
      },
      error: (error) => {
        this.toastr.error('Erro ao enviar dados', error);
      }
    });
  }
}
