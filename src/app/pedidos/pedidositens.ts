import { Produtos } from "../produtos/produtos";
import { Pedidos } from "./pedidos";

export class PedidosItens {
    produto: Produtos;
    pedido: Pedidos;
    quantidade: number;

    constructor(produto: Produtos, pedido: Pedidos, quantidade: number) {
        this.produto = produto;
        this.pedido = pedido;
        this.quantidade = quantidade;
    }
}
