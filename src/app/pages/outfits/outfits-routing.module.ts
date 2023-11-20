import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutfitsPage } from './outfits.page';

const routes: Routes = [
  {
    path: '',
    component: OutfitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutfitsPageRoutingModule {}
