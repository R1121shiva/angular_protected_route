import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = new AuthService();
  const router: Router = new Router();
  if (!authService.isLoggedIn()) {
    router.navigate(['/']);
    return false;
  }
  return authService.isLoggedIn();
};
