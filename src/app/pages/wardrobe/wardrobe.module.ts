import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WardrobePageRoutingModule } from './wardrobe-routing.module';

import { WardrobePage } from './wardrobe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WardrobePageRoutingModule
  ],
  declarations: [WardrobePage]
})
export class WardrobePageModule {}
