import { Clientes } from "../clientes/clientes";

export class Pedidos {
    nroPedido: number;
    cliente: Clientes;
    situacao: string;

    constructor(nroPedido:number, cliente: Clientes, situacao: string) {
        this.nroPedido = nroPedido;
        this.cliente = cliente;
        this.situacao = situacao;
    }
}
