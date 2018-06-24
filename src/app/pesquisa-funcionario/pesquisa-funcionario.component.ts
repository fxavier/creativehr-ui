import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-funcionario',
  templateUrl: './pesquisa-funcionario.component.html',
  styleUrls: ['./pesquisa-funcionario.component.css']
})
export class PesquisaFuncionarioComponent implements OnInit {

  funcionarios = [
    {numeroInterno: '123456', nome: 'Jose da Silva', funcao: 'Web Developer', telefone: '21-123456', telemovel: '821234567'},
    {numeroInterno: '123456', nome: 'Helio Macucule', funcao: 'Web Developer', telefone: '21-123456', telemovel: '821234567'},
    {numeroInterno: '123456', nome: 'Helio Macucule', funcao: 'Web Developer', telefone: '21-123456', telemovel: '821234567'}
  ];

  ngOnInit() {
  }

}
