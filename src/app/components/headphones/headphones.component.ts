import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.scss'],
})
export class HeadphonesComponent implements OnInit {
  data: Product[] = [];

  constructor(private service: CheckoutService) {}

  ngOnInit(): void {
    this.data = this.service.data;
  }

  showArticle(product: Product) {
    this.service.article = product;
  }
}
