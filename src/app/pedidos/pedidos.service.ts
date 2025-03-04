import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pedidos } from './pedidos';
import { PedidosItens } from './pedidositens';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private urlPedidos: string;
  private urlPedidosItens

  constructor(private http: HttpClient) {
    this.urlPedidos = 'http://localhost:8080/pedidos/';
    this.urlPedidosItens = 'http://localhost:8080/pedidosItens/'
  }

  public listPedidos(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(this.urlPedidos + 'listPedidos');
  }

  public listPedidosItens(pedido: Pedidos): Observable<PedidosItens[]> {
    let params = new HttpParams();
    params = params.set('pedidoId', pedido.id);
    return this.http.get<PedidosItens[]>(this.urlPedidosItens + 'listPedidosItens', { params });
  }

  public save(pedido: Pedidos): Observable<any> {
    return this.http.post(this.urlPedidos, pedido);
  }

  public finalizarPedido(pedido: Pedidos): Observable<any> {
    let params = new HttpParams();
    params = params.set('pedidoId', pedido.id);
    console.log(params);
    return this.http.put(this.urlPedidos + 'finalizarPedido', {}, { params });
  }

  public cancelarPedido(pedido: Pedidos): Observable<any> {
    let params = new HttpParams();
    params = params.set('pedidoId', pedido.id);
    return this.http.put(this.urlPedidos + 'cancelarPedido', {}, { params });
  }

  public excluirPedido(pedido: Pedidos): Observable<any> {
    let params = new HttpParams();
    params = params.set('pedidoId', pedido.id);
    return this.http.put(this.urlPedidos + "excluirPedido", {}, { params });
  }
}
