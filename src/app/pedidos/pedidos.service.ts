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
    this.urlPedidosItens = 'http://localhost:8080/pedidositens/'
  }

  public listPedidos(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(this.urlPedidos + 'listPedidos');
  }

  public listPedidosItens(): Observable<PedidosItens[]> {
    return this.http.get<PedidosItens[]>(this.urlPedidosItens + 'listPedidosItens');
  }

  public save(pedidosItens: PedidosItens[]): Observable<any> {
    return this.http.post(this.urlPedidosItens, pedidosItens);
  }
}
