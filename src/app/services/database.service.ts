import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type CollentionPredicate<T> = string | AngularFirestoreCollection;

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private afs:AngularFirestore
  ) { }

  private col<T>(ref:CollentionPredicate<T>, queryFn?): AngularFirestoreCollection{
    return typeof ref === "string"? this.afs.collection(ref,queryFn): ref;
  }

  add<T>(ref:CollentionPredicate<T>, data){
    return this.col(ref).add({
      ...data
    })
  }

  col$<T>(ref:CollentionPredicate<T>, queryFn?):Observable<any[]>{
    return this.col(ref,queryFn).snapshotChanges().pipe(
      map(docs => {
         return docs.map(d => {
           const data = d.payload.doc.data();
           const id = d.payload.doc.id;
           return  { id, ...data}
         })
      })
    )
  }

}
