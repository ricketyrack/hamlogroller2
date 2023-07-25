import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router'
import { ISkcc } from './skcc.model'
import { SkccService } from './skcc.service'
import { map } from 'rxjs/operators'

export const skccListResolver: ResolveFn<ISkcc[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  {
    return inject(SkccService).getSkccs().pipe(map(skccs => skccs));
  }
