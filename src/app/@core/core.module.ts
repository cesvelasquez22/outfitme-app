import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user/user.service';
import { StorageService } from './services/storage';

import { AuthModule } from './auth';
import { SplashScreenModule } from './services/splash-screen';

@NgModule({
  imports: [HttpClientModule, AuthModule, SplashScreenModule],
  providers: [StorageService, UserService],
})
export class CoreModule {}
