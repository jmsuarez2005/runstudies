import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {environment} from '../environments/environment'
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { CfgEntidaComponent } from './modules/common/model/cfg-entida/cfg-entida.component';


@NgModule({
  declarations: [
    AppComponent,
    CfgEntidaComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig,'runstudies'),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
