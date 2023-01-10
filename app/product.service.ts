import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts():Product[]{
    return[
      new Product(111,"Cpu","Dell",10,15000,275,120,15155,"assets/cpu.jpg"),
      new Product(112,"Mouse","a4Tech",150,65000,1150,500,68500,"assets/mouse.jpg"),
      new Product(113,"pen","Matador",150,65000,1150,500,68500,"assets/pen.jpg"),
      new Product(114,"Robo","Microsoft",150,65000,1150,500,68500,"assets/robo.jpg"),
      new Product(115,"Alarm","Walton",150,65000,1150,500,68500,"assets/alarm.jpg")
    ]
  }
}
