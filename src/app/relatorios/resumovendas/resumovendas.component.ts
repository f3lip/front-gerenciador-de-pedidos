import { Component } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';

@Component({
  selector: 'app-resumovendas',
  standalone: true,
  imports: [],
  templateUrl: './resumovendas.component.html',
  styleUrl: './resumovendas.component.css'
})
export class ResumovendasComponent {
  resumoVendas: any;

  constructor(private relatoriosService: RelatoriosService) {}

  ngOnInit(): void {
    this.relatoriosService.resumoVendas().subscribe(data => {
      this.resumoVendas = data;
    });
  }
}
