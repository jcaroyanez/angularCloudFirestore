import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
const firebaseConfig = {
  apiKey: "AIzaSyDvBYKzTOHZyq-pfPjoJrlVUPgfJablPc0",
  authDomain: "tutorial-75a5d.firebaseapp.com",
  databaseURL: "https://tutorial-75a5d.firebaseio.com",
  projectId: "tutorial-75a5d",
  storageBucket: "tutorial-75a5d.appspot.com",
  messagingSenderId: "121864741526",
  appId: "1:121864741526:web:49259bf60e787a0f"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
