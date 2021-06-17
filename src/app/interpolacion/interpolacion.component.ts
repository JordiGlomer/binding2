import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit {

  user = {name: 'John', surname: 'Smith', address: '13 Pine Street'};

  persona2: any;

  parrafo = 'lerem ipsum';

  constructor() { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  duplicarTexto(texto: string){
   return texto + texto;
  }
  // tslint:disable-next-line: typedef
  concatenarCadenas(cad1: string, cad2: string){
   return cad1 + ' ' + cad2;
  }
}
