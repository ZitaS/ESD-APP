import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { HomePage } from '../home/home';
import { User } from '../../interface/User';
import { AngularFireAuth} from "angularfire2/auth";
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

user = {} as User

constructor(public navCtrl: NavController,
public navParams: NavParams,
public afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }
    
  inscription()
  {
    this.navCtrl.push('InscriptionPage');
  }
  
  async connexion()
  {
      try {

          let result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password);
        if(result) {
            this.navCtrl.setRoot("HomePage");
        }
      }catch(err) {
          console.log(err);
      }
  }
}

