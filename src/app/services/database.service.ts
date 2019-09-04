import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

//type  string = string | AngularFirestoreCollection;
//type  string = string | AngularFirestoreDocument;

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private afs:AngularFirestore
  ) { }

  private col(ref: string, queryFn?): AngularFirestoreCollection{
    return this.afs.collection(ref,queryFn)
  }

  private doc(ref: string): AngularFirestoreDocument{
    return this.afs.doc(ref);
  }

  add(ref: string, data){
    return this.col(ref).add({
      ...data
    })
  }

  col$(ref: string, queryFn?):Observable<any[]>{
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

  update(ref: string, data){
    return this.doc(ref).update({
      ...data
    })
  }

  delete<T>(ref: string){
    return this.doc(ref).delete();
  }

}
