import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SavePassword } from 'capacitor-ios-autofill-save-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;
  submitEnabled = true;

  constructor(private router: Router, private platform: Platform) { }

  ionViewWillEnter() {
    this.submitEnabled = true;
    this.email = '';
    this.password = '';
  }



  async onSubmit() {
    if ((this.email.length === 0) || (this.password.length === 0)) {
      alert('Email and password must be specified.');
      return;
    }
    this.submitEnabled = false;

    await this.router.navigateByUrl('home');

    if (this.platform.is('ios')) {
      setTimeout(async () => {
        try {
          await SavePassword.promptDialog({
            username: this.email,
            password: this.password
          });
        } catch (err) {
          alert('Error:' + err);
        }

      }, 3000);
    }
  }

}
