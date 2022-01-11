import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinsPageRoutingModule } from './bitcoins-routing.module';

import { BitcoinsPage } from './bitcoins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinsPageRoutingModule
  ],
  declarations: [BitcoinsPage]
})
export class BitcoinsPageModule {}
