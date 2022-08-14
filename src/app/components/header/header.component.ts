import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interface';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  overlay = false;
  badge = this.service.cartItemList;
  cartItemList: Product[] = this.service.getProducts();

  constructor(private service: CheckoutService) {}
}
