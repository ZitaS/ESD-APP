import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';
import { InscriptionPage } from '../inscription/inscription';

/**
 * Generated class for the PrehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prehome',
  templateUrl: 'prehome.html',
})
export class PrehomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrehomePage');
  }
  connexion()
  {
    this.navCtrl.setRoot(ConnexionPage);
  } 
  
  inscription()
  {
    this.navCtrl.setRoot(InscriptionPage);
  }

}
