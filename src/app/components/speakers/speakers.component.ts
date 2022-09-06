import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Product } from 'src/app/interfaces/interface';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  public data: Product[] = [];
  constructor(private service: CheckoutService) {}

  public ngOnInit(): void {
    this.data = this.service.data;
  }
  public showArticle(product: Product) {
    this.service.article = product;
  }
}
