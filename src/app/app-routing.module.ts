import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotPageFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
