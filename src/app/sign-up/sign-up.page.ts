import { Component, HostBinding, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
export class SignUpPage implements OnInit {
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
  constructor() {}

  ngOnInit() {}

  register(user: User) {
    if (!user.email || !user.password || !user.confirmPassword) {
      return {
        success: false,
        message: 'Please fill all fields',
      };
    }
    if (user.password !== user.confirmPassword) {
      return {
        success: false,
        message: 'Passwords do not match',
      };
    }
    return {
      success: true,
      message: 'User created successfully',
      token: 'token',
    };
  }
}
