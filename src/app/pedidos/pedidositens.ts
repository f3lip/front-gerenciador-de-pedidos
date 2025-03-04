import { Produtos } from "../produtos/produtos";

export class PedidosItens {
    id!: number;
    produto: Produtos;
    quantidade: number;

    constructor(produto: Produtos, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}
