import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Product } from 'src/app/interfaces/interface';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
  data: Product[] = [];
  constructor(private service: CheckoutService) {}

  ngOnInit(): void {
    this.data = this.service.data;
  }
  showArticle(product: Product) {
    this.service.article = product;
  }
}
