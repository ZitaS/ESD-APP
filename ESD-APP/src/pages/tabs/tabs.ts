import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
import { InscriptionPage } from '../inscription/inscription';
import { ConnexionPage } from '../connexion/connexion';
import { MesStatistiquesPage } from '../mes-statistiques/mes-statistiques';
import { ActualitésPage } from '../actualités/actualités';
import { TousPage } from '../tous/tous';
import { JeuPage } from '../jeu/jeu';
import { TournoiPage } from '../tournoi/tournoi';

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
  tab7Root = MesStatistiquesPage;
  tab8Root = ActualitésPage;
  tab9Root = TousPage;
  tab10Root = JeuPage;
  tab11Root = TournoiPage;

  constructor() {

  }
}
