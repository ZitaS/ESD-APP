import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../interface/Item';
import { ItemProvider } from '../../providers/item/item';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(afAuth:AngularFireAuth,
    public service:ItemProvider,
    public navCtrl: NavController, public navParams:NavParams) {}
    
    ionViewDidLoad ()
    {
     let user = this.afAuth.auth.currentUser;
        if(!user)
            {
                this.navCtrl.setRoot("ConnexionPage");
                return;
            }
        this.items = this.service.getItems();
        
    }
    generate()
    {
        this.service.mockItems();
    }
  }

}
