import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TousPage } from './tous';

@NgModule({
  declarations: [
    TousPage,
  ],
  imports: [
    IonicPageModule.forChild(TousPage),
  ],
})
export class TousPageModule {}
