import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: Product[] = [];

  constructor(private service: CheckoutService) {}

  ngOnInit(): void {
    this.data = this.service.data;
  }

  showArticle(product: Product) {
    this.service.article = product;
  }
}
