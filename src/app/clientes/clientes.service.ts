import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Clientes } from './clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/clientes/';
  }

  public listClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.url + 'listClientes');
  }

  public save(cliente: Clientes): Observable<any> {
    return this.http.post(this.url, cliente);
  }
}
