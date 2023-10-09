import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { Credentials } from '@auth/user';
import { credentialsValidations } from '@auth/user.validations';
import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  public readonly userSuite = credentialsValidations;
  public user = new Credentials();

  isLoading = false;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit() {
    this.isLoading = true;
    this.authService
      .login(this.user)
      .pipe(
        finalize(() => (this.isLoading = false)),
        delay(0)
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/signed-in-redirect']);
        },
        error: (err) => {
          // TODO: show toast error: "Correo o contraseña incorrectos"
          console.log(err);
        },
      });
  }
}
