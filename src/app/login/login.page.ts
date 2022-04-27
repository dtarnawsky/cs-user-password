import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;
  submitEnabled = true;

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.submitEnabled = true;
  }



  onSubmit() {
    if ((this.email.length === 0) || (this.password.length === 0)) {
      alert('Email and password must be specified.');
      return;
    }
    this.submitEnabled = false;
    this.router.navigateByUrl('home');
  }

}
