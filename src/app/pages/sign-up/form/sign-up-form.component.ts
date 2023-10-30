import {
  AfterViewInit,
  Component,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { CreateUserDto } from 'src/app/@core/user/user';
import { ModalController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { userValidations } from 'src/app/@core/user/user.validations';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements AfterViewInit {
  @ViewChild('form') public form!: NgForm;
  public readonly userSuite = userValidations;

  private readonly formValue = signal(new CreateUserDto());
  private readonly formDirty = signal<boolean | null>(true);
  private readonly formValid = signal<boolean | null>(true);
  public readonly vm = computed(() => {
    return {
      user: this.formValue(),
      formValid: this.formValid(),
      formDirty: this.formDirty(),
    };
  });

  isLoading = false;

  constructor(
    readonly modalController: ModalController,
    private readonly authService: AuthService
  ) {}

  public ngAfterViewInit(): void {
    this.form?.valueChanges?.subscribe((v) => {
      this.formValue.update((curr) => new CreateUserDto({ ...curr, ...v }));
    });
    this.form?.statusChanges?.subscribe(() => {
      this.formDirty.set(this.form.dirty);
      this.formValid.set(this.form.valid);
    });
  }

  onSubmit() {
    this.isLoading = true;
    const newUser = this.formValue();
    this.authService
      .register(newUser)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.modalController.dismiss({ signedUp: true }, 'user', 'sign-up');
        },
        error: (err) => {
          // TODO: show toast
          console.log(err);
        },
      });
  }
}
