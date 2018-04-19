import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InscriptionPage } from './inscription';

@NgModule({
  declarations: [
    InscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(InscriptionPage),
  ],
})
export class InscriptionPageModule {

user = {} as user;
 constructor (
 public afAuth: AngularFireAuth,
 public navCtrl: NavController, public NavParams: NavParams)
 
 ionViewDidLoad() {
 console.log ('ionViewDidLoad ResgisterdemoPage');
 }
}
