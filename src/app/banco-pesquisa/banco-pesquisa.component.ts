import { Component, OnInit } from '@angular/core';
import { Banco } from '../banco';
import { Observable } from 'rxjs';
import { BancoService } from './banco.service';

@Component({
  selector: 'app-banco-pesquisa',
  templateUrl: './banco-pesquisa.component.html',
  styleUrls: ['./banco-pesquisa.component.css']
})
export class BancoPesquisaComponent implements OnInit {
   bancos: Banco[];

  constructor(private bancoService: BancoService) { }

  ngOnInit() {
    this.pesquisar();
  }
  pesquisar() {
     this.bancoService.pesquisar()
       .subscribe(data => this.bancos = data);
  }


}
