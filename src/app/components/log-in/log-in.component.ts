import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  isLogin = true;
  loggedIn = this.service.loggedIn;

  LogInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private service: CheckoutService) {}

  onSubmit() {
    this.LogInForm.reset();
  }
  switchTo() {
    this.isLogin = !this.isLogin;
  }
  logIn() {
    this.service.loggedIn = !this.service.loggedIn;
  }
  logOut() {
    this.service.loggedIn = !this.service.loggedIn;
    this.loggedIn = false;
  }
}
