import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { InicioPage } from '../pages/inicio/inicio';
import { ConveniosPage } from '../pages/convenios/convenios';
import { DocumentosPage } from '../pages/documentos/documentos';
import { TransmisionesPage } from '../pages/transmisiones/transmisiones';
import { VideosPage } from '../pages/videos/videos';
import { EventosPage } from '../pages/eventos/eventos';
import { SocialesPage } from '../pages/sociales/sociales';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TitularesServicios } from '../servicios/titulares.servicios';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Pro } from '@ionic/pro';
export const firebaseConfig = {
  apiKey: "AIzaSyBbvu8bRPmE4TRSv-JmSr_ibILf0zhcEwE",
    authDomain: "codemif.firebaseapp.com",
    databaseURL: "https://codemif.firebaseio.com",
    projectId: "codemif",
    storageBucket: "codemif.appspot.com",
    messagingSenderId: "193399491001"
};
Pro.init('712e4199', {
  appVersion: '0.0.1'
})
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    ConveniosPage,
    DocumentosPage,
    TransmisionesPage,
    VideosPage,
    EventosPage,
    SocialesPage

    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    ConveniosPage,
    DocumentosPage,
    TransmisionesPage,
    VideosPage,
    EventosPage,
    SocialesPage

  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TitularesServicios
  ]
  

  




})

export class AppModule {}
