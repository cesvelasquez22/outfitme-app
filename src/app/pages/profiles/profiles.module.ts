import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShortNamePipe } from '@shared/pipes';

import { ProfilesPageRoutingModule } from './profiles-routing.module';
import { ProfilesPage } from './profiles.page';
import { ProfilesService } from './profiles.service';

import { ProfileDetailComponent } from './detail/profile-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ProfilesGridComponent } from './grid/profiles-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesPageRoutingModule,
    RouterModule,

    ShortNamePipe,
  ],
  declarations: [ProfilesPage, ProfileDetailComponent, ProfileComponent, ProfilesGridComponent],
  providers: [ProfilesService],
})
export class ProfilesPageModule {}
