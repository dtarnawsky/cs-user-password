import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  infoMessage: string;
  submitEnabled = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clearMessages() {
    this.errorMessage = '';
    this.infoMessage = '';
  }

  onSubmit() {
    if ((this.email.length === 0) || (this.password.length === 0)) {
      this.errorMessage = 'Email and password must be specified.';
      return;
    }
    this.submitEnabled = false;
    this.router.navigateByUrl('home');
  }

}
