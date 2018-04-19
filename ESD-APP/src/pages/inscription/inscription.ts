import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from "../../interface/User";

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
    
    user = { } as User;
  constructor(public afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }
  
    async register()
    {
        try {
            let result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
            if(result)
            {
   
                this.navCtrl.setRoot("HomePage");

   }
   } catch (error){
    console.log(error);
   }
  
}
}
