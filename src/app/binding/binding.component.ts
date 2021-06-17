import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})

export class BindingComponent implements OnInit {

  selected!: number;
  image!: string;
  inputValue!: string;
  images =  [{
    name: 'imagen 1',
    url: 'https://images.unsplash.com/photo-1552432134-191ce4bdf1f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80'
    },
    {
    name: 'imagen 2',
    url: 'https://images.unsplash.com/photo-1606464995235-93957dc20e79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
  ];

    constructor(); { }

    ngOnInit();: void { }

    getInputValue(event: Event); {
    // tslint:disable-next-line: deprecation
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
