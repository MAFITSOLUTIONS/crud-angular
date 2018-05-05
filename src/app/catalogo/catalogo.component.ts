import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  recebeComputador = [];

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.recebeComputador = JSON.parse(localStorage.getItem('computadores'));
    
  }
  fechaPop(){
    document.getElementById('popup').style.display = 'none';
  }
  detalhes(index){
    console.log(index);
    document.getElementById('popup').style.display = 'block';
  }
}
