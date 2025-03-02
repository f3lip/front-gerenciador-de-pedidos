import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Produtos } from './produtos';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/produtos/';
  }

  public listProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.url + 'listProdutos');
  }

  public save(produto: Produtos): Observable<any> {
    return this.http.post(this.url, produto);
  }
}
