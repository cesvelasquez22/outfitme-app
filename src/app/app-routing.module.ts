import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard, profileGuard } from '@core/guards';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', },
  // Redirect signed in users to the home page
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: '' },
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
  // Auth routes
  {
    path: '',
    canActivate: [profileGuard, authGuard],
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
    canActivate: [authGuard],
    children: [
      {
        path: 'profiles',
        loadChildren: () =>
          import('@pages/profiles').then((m) => m.ProfilesPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
