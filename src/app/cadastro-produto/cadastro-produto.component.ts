import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

    marca = '';
    modelo = '';
    mobo = '';
    ram = '';
    hdMarca = '';
    hdTamanho = '';
    cpu = '';
    foto = 'https://akphoto1.ask.fm/522/362/151/1280003005-1pt9pek-flkshpqh97lko95/original/MeuPrimeiroLaptopXuxa.jpg';
    computadores = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.computadores = JSON.parse(localStorage.getItem('computadores'))
  }
  
  cadastra(){
    console.log('Funcão cadastra')
    console.log(this.computadores)
    this.computadores.push({
      marca: this.marca,
      modelo: this.modelo,
      mobo: this.mobo,
      ram: this.ram,
      hdMarca: this.hdMarca,
      hdTamanho: this.hdTamanho,
      cpu: this.cpu,
      foto: this.foto
    });
    localStorage.setItem('computadores', JSON.stringify(this.computadores));
    this.limpaCampo();
  }
  exclui(){
    this.computadores.pop();
    localStorage.setItem('computadores', JSON.stringify(this.computadores));
    console.log(this.computadores);
  }
  limpaCampo(){
    this.marca = ''; 
    this.modelo = '';
    this.mobo = '';
    this.ram = '';
    this.hdMarca = '';
    this.hdTamanho = '';
    this.cpu = '';
  }

}
