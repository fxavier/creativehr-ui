import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-pesquisa-departamento',
  templateUrl: './pesquisa-departamento.component.html',
  styleUrls: ['./pesquisa-departamento.component.css']
})
export class PesquisaDepartamentoComponent implements OnInit {

  departamentos: Departamento[];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.departamentoService.pesquisar()
        .subscribe(departamento => this.departamentos = departamento);
  }

}
