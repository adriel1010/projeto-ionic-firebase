import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { ImcService } from '../service/imc.service';
import { EditarImcPage } from '../pages/editar-imc/editar-imc';



const config = {
    apiKey: "AIzaSyDTdD3uqz5CF5QmDISTwYmiZinuDtfLQWA",
    authDomain: "aula-2a00a.firebaseapp.com",
    databaseURL: "https://aula-2a00a.firebaseio.com",
    projectId: "aula-2a00a",
    storageBucket: "aula-2a00a.appspot.com",
    messagingSenderId: "371799565742"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarImcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImcService
  ]
})





export class AppModule {}
