import { Component } from '@angular/core';
import { DatabaseService } from './services/database.service';
import { defineBase } from '@angular/core/src/render3';

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
    this.db.col$('ciudades').subscribe(listDoc => console.log(listDoc));
  }
}
