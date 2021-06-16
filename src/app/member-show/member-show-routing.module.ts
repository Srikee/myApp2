import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberShowPage } from './member-show.page';

const routes: Routes = [
  {
    path: '',
    component: MemberShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberShowPageRoutingModule {}
