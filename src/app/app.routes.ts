import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

export const routes: Routes = [
    {path: 'clientes', component: ClientesComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'relatorios', component: RelatoriosComponent},
];
