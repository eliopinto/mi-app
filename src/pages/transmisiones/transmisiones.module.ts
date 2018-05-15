import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransmisionesPage } from './transmisiones';

@NgModule({
  declarations: [
    TransmisionesPage,
  ],
  imports: [
    IonicPageModule.forChild(TransmisionesPage),
  ],
})
export class TransmisionesPageModule {}
