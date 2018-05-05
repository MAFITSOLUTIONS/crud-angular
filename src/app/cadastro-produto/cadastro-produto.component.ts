import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
    nome = '';
    marca = '';
    modelo = '';
    mobo = '';
    ram = '';
    hdMarca = '';
    hdTamanho = '';
    cpu = '';
    foto = '';
    computadores = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.computadores = JSON.parse(localStorage.getItem('computadores'))
  }
  
  cadastra(){
    console.log('Funcão cadastra')
    console.log(this.computadores)
    this.computadores.push({
      nome: this.nome,
      marca: this.marca,
      modelo: this.modelo,
      mobo: this.mobo,
      ram: this.ram,
      hdMarca: this.hdMarca,
      hdTamanho: this.hdTamanho,
      cpu: this.cpu
    });
    localStorage.setItem('computadores', JSON.stringify(this.computadores));
    this.limpaCampo();
  }
  limpaCampo(){
    this.nome = '';
    this.marca = ''; 
    this.modelo = '';
    this.mobo = '';
    this.ram = '';
    this.hdMarca = '';
    this.hdTamanho = '';
    this.cpu = '';
  }

}
