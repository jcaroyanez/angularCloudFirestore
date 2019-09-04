import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { Country } from './model';
import { DocumentReference } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listCountry: Country[];
  text: string;
  
  constructor(
    private db:DatabaseService
  ){}

  add(){
    this.db.add("country",{
      name: this.text
    }).then((response: DocumentReference) => {
      this.text = '';
      console.log(response);
    }).catch(err => console.log(err))
  }

  getAll(){
    this.db.col$('country').subscribe((listDoc: Country[]) => {
      this.listCountry = listDoc;
      console.log(this.listCountry)
    });
  }

  edit(){
    this.db.update(`country/${this.text}`, { name:'xxxxxxxxxxxx' } )
    .then(() => {
      console.log("Actualizado");
      this.text = '';
    })
    .catch(err => console.log(err))
  }

  delete(){
    this.db.delete(`country/${this.text}`)
    .then(() => console.log('Eliminado'))
    .catch(err => console.log(err))
  }

  search(){
    this.db.col$('country', ref => ref.where('name', '==', this.text)).subscribe((response: Country[]) => {
      this.listCountry = response;
    });
  }

  colInDoc(){
     this.db.add(`country/${this.text}/neighborhood`,{
       name: 'colInDoc'
     }).then(response => console.log(response.id));
  }
}
