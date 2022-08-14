import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Other, Product } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  modal = true;
  article: Product = this.service.article;
  cartItemList: Product[] = this.service.getProducts();
  total = 0;

  constructor(private location: Location, private service: CheckoutService) {}

  back() {
    this.location.back();
  }

  modalWindow() {
    this.modal = !this.modal;
  }

  addToCart(article: Product) {
    this.service.addToCart(article);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let i = 0; i < this.cartItemList.length; i++) {
      this.total += this.cartItemList[i].qty * this.cartItemList[i].price;
    }
  }

  chooseQty(value: string, product: Product) {
    if (value === '-') {
      if (product.qty < 2) {
        return this.removeItem(product);
      }
      product.qty--;
    } else {
      if (product.qty === 10) {
        return;
      }
      product.qty++;
    }
    this.service.setLocalStorage();
    this.getTotal();
  }
  removeAll() {
    this.cartItemList = [];
    this.service.cartItemList = this.cartItemList;
    this.getTotal();
    this.service.setLocalStorage();
  }

  changeArticle(item: Other) {
    let article = this.service.data.find(
      (element: Product) => element.slug === item.slug
    );
    if (article) {
      this.article = article;
    }
  }
  removeItem(product: Product) {
    let index = this.service.cartItemList.indexOf(product);
    this.service.cartItemList.splice(index, 1);
    this.service.setLocalStorage();
    this.getTotal();
  }
}
