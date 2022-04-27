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
  submitEnabled = true;

  constructor(private router: Router) { }

  ngOnInit() {
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
