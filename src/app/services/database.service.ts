import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

type CollentionPredicate<T> = string | AngularFirestoreCollection;

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private afs:AngularFirestore
  ) { }

  col<T>(ref:CollentionPredicate<T>, queryFn?): AngularFirestoreCollection{
    return typeof ref === "string"? this.afs.collection(ref): ref;
  }

  add<T>(ref:CollentionPredicate<T>, data){
    return this.col(ref).add({
      ...data
    })
  }

}
