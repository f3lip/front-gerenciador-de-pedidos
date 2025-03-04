import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { Clientes } from '../../clientes/clientes';
import { Produtos } from '../../produtos/produtos';
import { Pedidos } from '../pedidos';
import { ClientesService } from '../../clientes/clientes.service';
import { ProdutosService } from '../../produtos/produtos.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';
import { remove, findIndex } from 'lodash';
import { PedidosItens } from '../pedidositens';
import { NgxMaskDirective } from 'ngx-mask';
import { PedidosService } from '../pedidos.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgSelectModule, CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  pedido!: Pedidos;
  isEditar!: boolean;
  clienteSelecionado: any;
  produtoSelecionado: any;
  pedidosItens: PedidosItens[] = [];
  optionsClientes: Clientes[] = [];
  optionsProdutos: Produtos[] = [];
  form!: FormGroup;
  formCadastroPedido!: FormGroup<any>;

  constructor(public modal: NgbActiveModal, private clientesService: ClientesService, 
    private produtosService: ProdutosService, private toastr: ToastrService,
    private cdr: ChangeDetectorRef, private pedidosService: PedidosService) {}

  ngOnInit(): void {
    if(this.isEditar) {
      this.clienteSelecionado = this.pedido.cliente;
      this.pedidosService.listPedidosItens(this.pedido).subscribe(data => {
        this.pedidosItens = data;
      });
    }
    this.clientesService.listClientes().subscribe(data => {
      this.optionsClientes = data;
    });
    this.produtosService.listProdutos().subscribe(data => {
      this.optionsProdutos = data;
    });
  }

  onOptionChange(event: any) {
    if(event !== null && event.id !== null && !this.isProdutoAdicionado(event)) {
      this.pedidosItens.push(new PedidosItens(event, 1));
      this.produtoSelecionado = null;
      this.cdr.detectChanges();
      this.toastr.success('Produto adicionado com sucesso!');
    }
  }

  isProdutoAdicionado(event: any) {
    let produtoAdicionado = findIndex(this.pedidosItens, (pedidoItem: PedidosItens) => pedidoItem.produto.id === event.id) >= 0;
    if(produtoAdicionado) {
      this.toastr.error('Produto já adicionado a lista.');
    }
    return produtoAdicionado;
  }

  excluirProduto(event: any) {
    this.pedidosItens = remove(this.pedidosItens, (pedidoItem: PedidosItens) => pedidoItem.produto.id === event.id);
    this.toastr.success('Produto excluído com sucesso!');
  }

  salvar(): void {
    let pedidoSalvar = null;
    if(this.isEditar) {
      this.pedido.cliente = this.clienteSelecionado;
      this.pedido.pedidosItens = this.pedidosItens;
      pedidoSalvar = this.pedido;
    } else {
      pedidoSalvar = new Pedidos(this.clienteSelecionado, "Em andamento", this.pedidosItens);
    }
    this.pedidosService.save(pedidoSalvar).subscribe({
      next: (response) => {
        this.toastr.success('Pedido ' + response.id + ' salvo com sucesso!');
        this.modal.dismiss();
      },
      error: (error) => {
        this.toastr.error('Erro ao enviar dados', error);
      }
    });
  }
}
