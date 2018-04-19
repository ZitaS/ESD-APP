import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournoiPage } from './tournoi';

@NgModule({
  declarations: [
    TournoiPage,
  ],
  imports: [
    IonicPageModule.forChild(TournoiPage),
  ],
})
export class TournoiPageModule {}
