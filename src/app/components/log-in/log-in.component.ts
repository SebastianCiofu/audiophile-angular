import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  public isLogin = true;
  public loggedIn = this.service.loggedIn;

  public LogInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private service: CheckoutService) {}

  public onSubmit() {
    this.LogInForm.reset();
  }
  public switchTo() {
    this.isLogin = !this.isLogin;
  }
  logIn() {
    this.service.loggedIn = !this.service.loggedIn;
  }
  public logOut() {
    this.service.loggedIn = !this.service.loggedIn;
    this.loggedIn = false;
  }
}
