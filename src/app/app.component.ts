import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { DocumentosPage } from '../pages/documentos/documentos';
import { TransmisionesPage } from '../pages/transmisiones/transmisiones';
import { VideosPage } from '../pages/videos/videos';
import { ConveniosPage } from '../pages/convenios/convenios';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV')nav: Nav;
  public rootPage:any;
  
public pages: Array< {titulo: string, component:any, icon:string }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage=InicioPage;
    this.pages = [
      { titulo: "Inicio", component:InicioPage, icon:"home"},
      { titulo: "Quienes Somos", component:InicioPage, icon:"information-circle"},
      { titulo: "Blog Codemif", component:ConveniosPage, icon:"book"},
      { titulo: "Descarga Documentos", component:DocumentosPage, icon:"cloud-download"},
      { titulo: "Contáctenos", component:TransmisionesPage, icon:"pin"},
      { titulo: "Salir Aplicación", component:VideosPage, icon:"power"},
    ]; 

  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  gotopage(page) {
    this.nav.setRoot(page);
  }
}
