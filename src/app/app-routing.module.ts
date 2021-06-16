import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then(m => m.MemberPageModule)
  },
  {
    path: 'member-add',
    loadChildren: () => import('./member-add/member-add.module').then(m => m.MemberAddPageModule)
  },
  {
    path: 'member-edit/:id',
    loadChildren: () => import('./member-edit/member-edit.module').then(m => m.MemberEditPageModule)
  },
  {
    path: 'member-show/:id',
    loadChildren: () => import('./member-show/member-show.module').then(m => m.MemberShowPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
