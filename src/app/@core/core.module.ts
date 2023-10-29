import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user/user.service';
import { StorageService } from './services/storage';

import { AuthModule } from './auth';

@NgModule({
  imports: [HttpClientModule, AuthModule],
  providers: [StorageService, UserService],
})
export class CoreModule {}
