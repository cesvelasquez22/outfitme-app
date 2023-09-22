import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormValidators } from 'src/app/shared/validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  readonly signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    tos: new FormControl(false, [Validators.requiredTrue]),
  }, { validators: FormValidators.mustMatch('password', 'confirmPassword', 8) });

  constructor(readonly modalController: ModalController) {}

  onSubmit() {
    console.log({ user: this.signUpForm.value });
  }
}
