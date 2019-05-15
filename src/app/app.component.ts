import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private db:DatabaseService
  ){}

  add(){
    this.db.add("ciudades",{
      name:"Medellin"
    }).then(response => console.log(response))
      .catch(err => console.log(err))
  }

  getAll(){
    this.db.col$('persona').subscribe(listDoc => console.log(listDoc));
  }

  edit(){
    this.db.update('persona/9zpTMvyjiv9tLb2hBSpm', { cel:33333333333 } )
    .then(() => console.log("Actualizado"))
    .catch(err => console.log(err))
  }

  delete(){
    this.db.delete('ciudades/W9He020gfHLtidH3F1s8')
    .then(() => console.log('Eliminado'))
    .catch(err => console.log(err))
  }

  search(){
    this.db.col$('persona', ref => this.querys(ref,false)).subscribe(response => console.log(response));
  }

  querys(ref,value:boolean){
    if(value)
     return ref.where('age','>',20);
    else
     return ref.where('age','<',20); 
  }

  colInDoc(){
     this.db.add('persona/8TeTOacmixZ07Bky0YeD/cel',{
       number:'111111111111111111111'
     }).then(response => console.log(response.id));
  }
}
