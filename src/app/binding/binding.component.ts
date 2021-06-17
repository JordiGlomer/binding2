import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <p>
      binding works!
    </p>
  `,
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
