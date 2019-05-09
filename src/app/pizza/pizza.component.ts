import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  toppings: string[];

  constructor() {}

  ngOnInit() {}

  translate(i) {
    const x = -30 + Math.round(50 * Math.cos(i * ((2 * Math.PI) / 15))) + 'px';
    const y = 20 + Math.round(26 * Math.sin(i * ((2 * Math.PI) / 15))) + 'px';
    const val = `translate(${x}, ${y})`;
    return val;
  }
}
