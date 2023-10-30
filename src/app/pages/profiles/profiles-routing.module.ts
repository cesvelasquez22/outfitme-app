import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesPage } from './profiles.page';
import { ProfileDetailComponent } from './detail/profile-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesPage,
  },
  {
    path: 'create',
    component: ProfileDetailComponent,
  },
  {
    path: ':id',
    component: ProfileDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesPageRoutingModule {}
