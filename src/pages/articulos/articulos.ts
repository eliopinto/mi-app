import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TitularesServicios } from '../../servicios/titulares.servicios';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserObject } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ArticulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulos',
  templateUrl: 'articulos.html',
})

export class ArticulosPage { 
titulares=[];
 constructor(public navCtrl: NavController, public titularesServicios:TitularesServicios, 
  public visitarurl:InAppBrowser) { 
  titularesServicios.mostrartitulares()
  .subscribe(articulos => {this.titulares=articulos;});

 }
options: InAppBrowserOptions = {
  location : 'yes',//Or 'no' 
  hidden : 'no', //Or  'yes'
  clearcache : 'yes',
  clearsessioncache : 'yes',
  zoom : 'yes',//Android only ,shows browser zoom controls 
  hardwareback : 'yes',
  mediaPlaybackRequiresUserAction : 'no',
  shouldPauseOnSuspend : 'no', //Android only 
  closebuttoncaption : 'Close', //iOS only
  disallowoverscroll : 'no', //iOS only 
  toolbar : 'yes', //iOS only 
  enableViewportScale : 'no', //iOS only 
  allowInlineMediaPlayback : 'no',//iOS only 
  presentationstyle : 'pagesheet',//iOS only 
  fullscreen : 'yes',//Windows only    
}
public openWithSystemBrowser(url :any ){
  let target = "_self";
  this.visitarurl.create(url,target,this.options);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticulosPage');
  }
}

