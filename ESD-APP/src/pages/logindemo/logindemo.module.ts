import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogindemoPage } from './logindemo';

@NgModule({
  declarations: [
    LogindemoPage,
  ],
  imports: [
    IonicPageModule.forChild(LogindemoPage),
  ],
})
export class LogindemoPageModule {}
