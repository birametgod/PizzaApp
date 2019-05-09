import { PizzaService } from './../pizza.service';
import { PizzaComponent } from './../pizza/pizza.component';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
  @ViewChild('pizza', { read: ViewContainerRef }) pizza: ViewContainerRef;
  selectedToppings: string[];
  toppings: string[];

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.selectedToppings = [];
    this.toppings = [
      'anchois',
      'bacon',
      'basilic',
      'chili',
      'mozzarella',
      'champignon',
      'olive',
      'oignon',
      'poivre',
      'pepperoni',
      'crevette',
      'maïsdoux',
      'Tomate'
    ];
  }

  selectToppings(topping) {
    if (this.selectedToppings.indexOf(topping) === -1) {
      this.selectedToppings.push(topping);
    } else {
      this.selectedToppings.splice(this.selectedToppings.indexOf(topping), 1);
    }
  }

  createPizza() {
    const pizzaFactory = this.resolver.resolveComponentFactory(PizzaComponent);
    const pizza = this.pizza.createComponent(pizzaFactory);
    this.selectedToppings = [];
    pizza.instance.toppings = this.selectedToppings;
  }
}
