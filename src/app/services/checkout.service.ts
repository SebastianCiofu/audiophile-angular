import { Injectable } from '@angular/core';
import data from './db.json';
import { Product } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public article: Product = data[0];
  public data: Product[] = data;
  public cartItemList: Product[] = JSON.parse(
    localStorage.getItem('cartItemList') || '{}'
  );
  public total = 0;
  public loggedIn = false;

  addToCart(product: Product) {
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

    this.setLocalStorage();
    this.getTotal();
  }

  getProducts() {
    return this.cartItemList;
  }

  setLocalStorage() {
    localStorage.setItem('cartItemList', JSON.stringify(this.cartItemList));
  }

  getTotal() {
    this.total = 0;
    this.cartItemList.forEach((item) => {
      this.total += item.qty * item.price;
    });
  }
}
