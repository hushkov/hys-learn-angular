import { nanoid } from 'nanoid';
import { Component } from '@angular/core';

interface Product {
  id: string;
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productsPerPage: number = 8;
  products: Product[] = this.getProducts(this.productsPerPage);

  getProducts(productsPerPage: number): Product[] {
    let products = [];
    for (let i = 1; i <= productsPerPage; i += 1) {
      products.push({
        id: nanoid(),
        title: `Product #${i}`,
        price: Math.floor(Math.random() * 100),
      });
    }
    return products;
  }
}
