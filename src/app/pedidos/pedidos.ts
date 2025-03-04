import { Clientes } from "../clientes/clientes";
import { PedidosItens } from "./pedidositens";

export class Pedidos {
    id!: number;
    nroPedido!: number;
    cliente: Clientes;
    situacao: string;
    pedidosItens: PedidosItens[]; 

    constructor(cliente: Clientes, situacao: string, pedidosItens: PedidosItens[]) {
        this.cliente = cliente;
        this.situacao = situacao;
        this.pedidosItens = pedidosItens;
    }
}
