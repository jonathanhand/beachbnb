import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacedetailPage } from './placedetail.page';

const routes: Routes = [
  {
    path: '',
    component: PlacedetailPage
  },
  {
    path: ':placeId',
    component: PlacedetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlacedetailPage]
})
export class PlacedetailPageModule {}
