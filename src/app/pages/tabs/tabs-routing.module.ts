import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'outfits',
        loadChildren: () => import('../outfits/outfits.module').then( m => m.OutfitsPageModule)
      },
      {
        path: 'wardrobe',
        loadChildren: () => import('../wardrobe/wardrobe.module').then( m => m.WardrobePageModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
