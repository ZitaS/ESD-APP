import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ConnexionPage } from '../pages/connexion/connexion';
import { MesStatistiquesPage } from '../pages/mes-statistiques/mes-statistiques';
import { ActualitésPage } from '../pages/actualités/actualités';
import { TousPage } from '../pages/tous/tous';
import { JeuPage } from '../pages/jeu/jeu';
import { TournoiPage } from '../pages/tournoi/tournoi';
import { EsdPage } from '../pages/esd/esd';
import { PrehomePage } from '../pages/prehome/prehome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASE_PARAMS} from './app.firebase.config';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    InscriptionPage,
    ConnexionPage,
    MesStatistiquesPage,
    ActualitésPage,
    TousPage,
    JeuPage,
    TournoiPage,
    EsdPage,
    PrehomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_PARAMS),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilPage,
    InscriptionPage,
    ConnexionPage,
    MesStatistiquesPage,
    ActualitésPage,
    TousPage,
    JeuPage,
    TournoiPage,
    EsdPage,
    PrehomePage
  ],
  providers: [
     AngularFireAuth,
   AngularFirestore,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler,}
  ]
})
export class AppModule {}
