import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadPessoaContador';
  nome = null;
  pessoas = [];
  contador = 0;
  adicionar(nome){
    this.pessoas.push(this.nome);
    this.nome = null;
    this.contador = this.contador + 1;
  }
  deletar(nome){
    this.pessoas.splice(this.nome, 1);
    this.contador = this.contador - 1;
  }
}
