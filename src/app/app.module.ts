import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LoadingComponent } from '@shared/loading';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({
      mode: 'md',
      backButtonText: '',
      backButtonIcon: 'arrow-back-outline',
      swipeBackEnabled: true,
    }),
    IonicStorageModule.forRoot(),
    CoreModule,

    LoadingComponent,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
