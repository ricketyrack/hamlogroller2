import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { SkccService } from './skcc.service'

export const canActivateSkcc: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
  const skccService = inject(SkccService);
  const router = inject(Router);

  const callsign = route.paramMap.get('callsign');
  const skccExists = !!callsign && !!skccService.getSkcc(callsign);

  if (!skccExists) {
    router.navigate(['/404'])
  }

  return skccExists;
}
