import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
    computadores = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.computadores = JSON.parse(localStorage.getItem('computadores'));
  }

  onSubmit(form){
    this.computadores.push(form.value);
    localStorage.setItem('computadores', JSON.stringify(this.computadores));
    console.log(this.computadores);
    this.computadores = []; 
  }
}
