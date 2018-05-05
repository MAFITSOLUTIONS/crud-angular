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
    console.log('Filho', this.recebeComputador);
  }

}
