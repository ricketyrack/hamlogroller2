import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router'
import { ISkcc } from './skcc.model'
import { SkccService } from './skcc.service'

export const skccResolver: ResolveFn<ISkcc> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  {
    return inject(SkccService).getSkcc(route.paramMap.get('callsign')!);
  }
