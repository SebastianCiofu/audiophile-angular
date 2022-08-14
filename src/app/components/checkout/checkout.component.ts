import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Product } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  modal = true;
  cartItemList: Product[] = this.service.getProducts();
  shipping = 50;
  total = this.service.total;
  vat = this.total * 0.2;
  grandTotal = this.shipping + this.total + this.vat;

  checkoutForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    adress: new FormControl(null, [Validators.required]),
    zip: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    paymentMethod: new FormControl(null, [Validators.required]),
    emoneyNumber: new FormControl(null, [Validators.required]),
    emoneyPin: new FormControl(null, [Validators.required]),
  });

  constructor(private service: CheckoutService, private location: Location) {}

  ngOnInit(): void {
    this.getTotal();
  }

  back() {
    this.location.back();
  }

  modalWindow() {
    this.modal = !this.modal;
  }

  resetCart() {
    this.cartItemList = [];
    this.service.cartItemList = this.cartItemList;
    this.checkoutForm.reset();
    this.service.setLocalStorage();
    this.getTotal();
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
  getTotal() {
    this.total = 0;
    this.cartItemList.forEach((item) => {
      this.total += item.qty * item.price;
      this.vat = this.total * 0.2;
      this.grandTotal = this.shipping + this.total + this.vat;
    });
  }
  removeItem(product: Product) {
    let index = this.service.cartItemList.indexOf(product);
    this.service.cartItemList.splice(index, 1);
    this.service.setLocalStorage();
    this.getTotal();
  }
}
