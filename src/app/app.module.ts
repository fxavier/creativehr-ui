import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaFuncionarioComponent } from './pesquisa-funcionario/pesquisa-funcionario.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { BancoPesquisaComponent } from './banco-pesquisa/banco-pesquisa.component';
import { PesquisaDepartamentoComponent } from './pesquisa-departamento/pesquisa-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PesquisaFuncionarioComponent,
    FuncionarioCadastroComponent,
    BancoPesquisaComponent,
    PesquisaDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
