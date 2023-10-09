import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import {
  InputWrapperComponent,
  FormDirective,
  FormModelDirective,
} from '@shared/form-validation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,

    InputWrapperComponent,
    FormDirective,
    FormModelDirective,
  ],
  declarations: [SignInPage],
})
export class SignInPageModule {}
