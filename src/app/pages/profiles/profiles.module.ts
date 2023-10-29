import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesPageRoutingModule } from './profiles-routing.module';

import { ProfilesPage } from './profiles.page';
import { ShortNamePipe } from '@shared/pipes';
import { ProfilesService } from './profiles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,

    ShortNamePipe,
  ],
  declarations: [ProfilesPage],
  providers: [ProfilesService],
})
export class ProfilesPageModule {}
