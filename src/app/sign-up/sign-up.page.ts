import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalCustomEvent } from '@ionic/core';

interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  user: User = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  randomMin = 1;
  randomMax = 4;
  randomBackground =
    Math.floor(Math.random() * (this.randomMax - this.randomMin + 1)) +
    this.randomMin;
  readonly backgroundClass = `sign-up-bg-${this.randomBackground}`;

  constructor(private readonly router: Router) {}

  onDidDismiss($event: ModalCustomEvent) {
    console.log({ $event });
    const { data, role } = $event.detail;
    if (data && data.signedUp && role === 'user') {
      this.router.navigate(['/signed-in-redirect']);
    }
  }
}
