import { Component } from '@angular/core';
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
  overlayCart = false;
  total = 0;

  constructor(private service: CheckoutService) {}
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

  getTotal() {
    this.total = 0;
    for (let item of this.cartItemList) {
      this.total += item.qty * item.price;
    }
  }
  removeItem(product: Product) {
    let index = this.service.cartItemList.indexOf(product);
    this.service.cartItemList.splice(index, 1);
    this.service.setLocalStorage();
    this.getTotal();
  }
}
