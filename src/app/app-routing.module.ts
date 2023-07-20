import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivateSkcc,
  SkccListComponent,
  SkccDetailsComponent,
  skccListResolver
} from './skccservice/index';

import { Error404Component } from './errors/404.component';

const routes: Routes = [
  { path: 'skccs', component: SkccListComponent, title: 'Skcc Members', resolve: { skccs: skccListResolver } },
  { path: 'skcc/:id', component: SkccDetailsComponent, canActivate: [canActivateSkcc] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/skccs', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
