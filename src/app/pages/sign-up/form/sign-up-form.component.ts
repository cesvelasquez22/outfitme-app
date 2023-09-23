import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/@auth';
import { FormValidators } from '@shared/validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  readonly signUpForm = new FormGroup(
    {
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      fullName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
          ),
        ],
      }),
      confirmPassword: new FormControl('', [Validators.required]),
      tos: new FormControl(false, [Validators.requiredTrue]),
    },
    { validators: FormValidators.mustMatch('password', 'confirmPassword', 8) }
  );

  isLoading = false;

  constructor(
    readonly modalController: ModalController,
    private readonly authService: AuthService,
  ) {}

  onSubmit() {
    this.signUpForm.disable();
    this.isLoading = true;
    const { email, fullName, password } = this.signUpForm.getRawValue();
    this.authService.register({ email, fullName, password }).subscribe({
      next: (user) => {
        this.isLoading = false;
        this.modalController.dismiss({ signedUp: true }, 'user', 'sign-up');
      },
      complete: () => {
        this.isLoading = false;
        this.signUpForm.enable();
      },
    });
  }
}
