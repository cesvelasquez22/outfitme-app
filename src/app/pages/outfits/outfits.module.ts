import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutfitsPageRoutingModule } from './outfits-routing.module';

import { OutfitsPage } from './outfits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutfitsPageRoutingModule
  ],
  declarations: [OutfitsPage]
})
export class OutfitsPageModule {}
