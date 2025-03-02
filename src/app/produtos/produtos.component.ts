import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Produtos } from './produtos';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos: Produtos[] = [];

  constructor(private modalService: NgbModal, private produtosService: ProdutosService) {}

  openModalCadastrarProduto() {
    this.modalService.open(CadastroComponent);
  }

  ngOnInit(): void {
    this.produtosService.listProdutos().subscribe(data => {
      this.produtos = data;
    });
  }
}
