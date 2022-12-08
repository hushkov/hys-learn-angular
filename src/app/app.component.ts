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
  products: Product[] = [];

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.products = this.getProducts();
  }

  getProducts(): Product[] {
    const startIndex = this.products.length + 1;
    const limit = this.productsPerPage + startIndex;
    let products = [];

    for (let i = startIndex; i <= limit; i += 1) {
      products.push({
        id: nanoid(),
        title: `Product #${i}`,
        price: Math.floor(Math.random() * 100),
      });
    }
    return products;
  }

  loadMoreProducts(): void {
    this.products = [...this.products, ...this.getProducts()];
  }
}
