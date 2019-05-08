import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private toppingSource = new BehaviorSubject<string[]>(['olive']);
  currentTopping = this.toppingSource.asObservable();
  constructor() {}

  changeTopping(topping: string[]) {
    this.toppingSource.next(topping);
  }
}
