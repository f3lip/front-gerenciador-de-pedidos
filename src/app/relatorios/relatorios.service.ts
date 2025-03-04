import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pedidos } from '../pedidos/pedidos';


@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/relatorios/';
  }

  public resumoVendas(): Observable<any> {
    return this.http.get<any>(this.url + 'resumoVendas');
  }

  public pedidosPendentes(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(this.url + 'pedidosPendentes');
  }
}
