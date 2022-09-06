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
  public modal: boolean = true;
  public cartItemList: Product[] = this.service.getProducts();
  public shipping: number = 50;
  public total: number = this.service.total;
  public vat: number = this.total * 0.2;
  public grandTotal: number = this.shipping + this.total + this.vat;

  public checkoutForm = new FormGroup({
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

  public ngOnInit(): void {
    this.getTotal();
  }

  public back() {
    this.location.back();
  }

  public modalWindow() {
    this.modal = !this.modal;
  }

  public resetCart() {
    this.cartItemList = [];
    this.service.cartItemList = this.cartItemList;
    this.checkoutForm.reset();

    this.getTotal();
  }

  public chooseQty(value: string, product: Product) {
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

    this.getTotal();
  }

  public getTotal() {
    this.total = 0;
    for (let item of this.cartItemList) {
      this.total += item.qty * item.price;
      this.vat = this.total * 0.2;
      this.grandTotal = this.shipping + this.total + this.vat;
    }
  }

  public removeItem(product: Product): void {
    let index = this.service.cartItemList.indexOf(product);
    this.service.cartItemList.splice(index, 1);

    this.getTotal();
  }
}
