import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },
  // TODO: Separate by auth guard
  {
    path: 'home',
    loadChildren: () => import('@pages/home').then( m => m.HomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@pages/sign-up').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@pages/sign-in').then( m => m.SignInPageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('@pages/profiles').then( m => m.ProfilesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
