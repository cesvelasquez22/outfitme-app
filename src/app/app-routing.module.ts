import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard, profileGuard } from '@core/guards';

const routes: Routes = [
  // Redirect signed in users to the home page
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'profiles',
        loadChildren: () =>
          import('@pages/profiles').then((m) => m.ProfilesPageModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard, profileGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  // No Auth routes
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@pages/sign-up').then((m) => m.SignUpPageModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('@pages/sign-in').then((m) => m.SignInPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
