import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceDetailsPage } from './place-details.page';

const routes: Routes = [
  {
    path: ':place-id',
    component: PlaceDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailsPageRoutingModule {}
