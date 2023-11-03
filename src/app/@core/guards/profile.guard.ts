import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '@core/user';

export const profileGuard: CanActivateFn = async (route, state) => {
  return checkProfile();
};

const checkProfile = async () => {
  const userService = inject(UserService);
  const router = inject(Router);

  const profile = await userService.checkProfile();

  if (profile) {
    return true;
  }

  router.navigate(['/profiles']);
  return false;
}
