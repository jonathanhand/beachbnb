import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferdetailPage } from './offerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: OfferdetailPage
  },
  {
    path: ':placeId',
    component: OfferdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferdetailPage]
})
export class OfferdetailPageModule {}
