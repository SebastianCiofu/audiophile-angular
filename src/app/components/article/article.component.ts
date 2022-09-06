import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Other, Product } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  public article: Product = this.service.article;
  public cartItemList: Product[] = this.service.getProducts();
  public total: number = 0;

  constructor(private location: Location, private service: CheckoutService) {}

  public back() {
    this.location.back();
  }

  public addToCart(article: Product) {
    this.service.addToCart(article);
    this.total = 0;
    for (let item of this.cartItemList) {
      this.total += item.qty * item.price;
    }
  }

  public changeArticle(item: Other) {
    let article = this.service.data.find(
      (element: Product) => element.slug === item.slug
    );
    if (article) {
      this.article = article;
      window.scrollTo(0, 0);
    }
  }
}
