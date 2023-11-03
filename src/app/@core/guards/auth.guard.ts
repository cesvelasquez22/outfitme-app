import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/auth';

export const authGuard: CanActivateFn = (route, state) => {
  return checkAuth();
};

const checkAuth = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = await authService.check();

  if (isAuthenticated) {
    return true;
  }

  // authService.logout();
  router.navigate(['/sign-in']);
  return false;
}
