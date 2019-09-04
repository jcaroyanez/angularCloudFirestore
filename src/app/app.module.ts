import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
var firebaseConfig = {
  apiKey: "AIzaSyBjymPpMdP7T8M1qXgcfD5y4Q29_rQTqew",
  authDomain: "examples-4aa45.firebaseapp.com",
  databaseURL: "https://examples-4aa45.firebaseio.com",
  projectId: "examples-4aa45",
  storageBucket: "examples-4aa45.appspot.com",
  messagingSenderId: "903270211637",
  appId: "1:903270211637:web:e95b9d2965542f60"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
