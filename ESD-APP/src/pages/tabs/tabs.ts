import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { InscriptionPage } from '../inscription/inscription';
import { ConnexionPage } from '../connexion/connexion';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProfilPage;
  tab5Root = InscriptionPage;
  tab6Root = ConnexionPage;
  

  constructor() {

  }
}
