import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberShowPageRoutingModule } from './member-show-routing.module';

import { MemberShowPage } from './member-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberShowPageRoutingModule
  ],
  declarations: [MemberShowPage]
})
export class MemberShowPageModule {}
