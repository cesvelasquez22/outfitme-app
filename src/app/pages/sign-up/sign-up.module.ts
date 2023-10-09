import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { SignUpFormComponent } from './form/sign-up-form.component';

import {
  FormModelGroupDirective,
  InputWrapperComponent,
  FormDirective,
  FormModelDirective,
} from '@shared/form-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,

    FormModelGroupDirective,
    InputWrapperComponent,
    FormDirective,
    FormModelDirective,
  ],
  declarations: [SignUpPage, SignUpFormComponent],
})
export class SignUpPageModule {}
