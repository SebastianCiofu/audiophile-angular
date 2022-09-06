import { Injectable } from '@angular/core';
import data from './db.json';
import { Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public article: Product = data[0];
  public data: Product[] = data;
  public cartItemList: Product[] = [];
  public total: number = 0;
  public loggedIn: boolean = false;

  public addToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItemList.push(product);
    }

    this.getTotal();
  }

  public getProducts() {
    return this.cartItemList;
  }

  public getTotal() {
    this.total = 0;
    this.cartItemList.forEach((item: Product) => {
      this.total += item.qty * item.price;
    });
  }
}
