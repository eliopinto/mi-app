import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConveniosPage } from './convenios';

@NgModule({
  declarations: [
    ConveniosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConveniosPage),
  ],
})
export class ConveniosPageModule {}
