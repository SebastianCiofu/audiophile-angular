import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: ['./earphones.component.scss'],
})
export class EarphonesComponent implements OnInit {
  public data: Product[] = [];

  constructor(private service: CheckoutService) {}

  public ngOnInit(): void {
    this.data = this.service.data;
  }
  public showArticle(product: Product) {
    this.service.article = product;
  }
}
