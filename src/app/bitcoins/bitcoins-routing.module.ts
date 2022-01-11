import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinsPage } from './bitcoins.page';

const routes: Routes = [
  {
    path: '',
    component: BitcoinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitcoinsPageRoutingModule {}
