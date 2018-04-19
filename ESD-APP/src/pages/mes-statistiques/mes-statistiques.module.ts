import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesStatistiquesPage } from './mes-statistiques';

@NgModule({
  declarations: [
    MesStatistiquesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesStatistiquesPage),
  ],
})
export class MesStatistiquesPageModule {}
