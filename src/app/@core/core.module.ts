import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth';
import { SplashScreenModule } from './services/splash-screen';

@NgModule({
  imports: [HttpClientModule, AuthModule, SplashScreenModule],
})
export class CoreModule {}
