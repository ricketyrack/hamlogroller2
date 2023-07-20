import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivateSkcc,
  SkccListComponent,
  SkccDetailsComponent,
  skccListResolver
} from './skccservice/index';

const routes: Routes = [
  { path: 'skccs', component: SkccListComponent, resolve: { skccs: skccListResolver } },
  { path: 'skcc/:id', component: SkccDetailsComponent, canActivate: [canActivateSkcc]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
