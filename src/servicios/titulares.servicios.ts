import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Injectable()
export class TitularesServicios {
    constructor(public afDB: AngularFireDatabase) {}
    titulares=[];
         public mostrartitulares() { //return this.titulares;
            return this.afDB.list('articulos/').valueChanges();
        }

}
