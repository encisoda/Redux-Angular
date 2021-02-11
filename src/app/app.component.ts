import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store, Action,  } from '@ngrx/store';
/* import { DecrementarAction, IncrementarAction } from './contador/contador.actions'; */
import * as fromContador from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'redux-app';

  contador: number;

  constructor(private store: Store<AppState>){
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  incrementar(){
    //this.contador ++;
    //todas las acciones tiene un type
    // const accion: Action = { 
    //   type: 'INCREMENTAR'
    // };
    //crea de forma automatica el incrementar action
    const accion =  new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }


  

  decrementar(){
    //this.contador --; 
    //todas las acciones tiene un type
    // const accion: Action = { 
    //   type: 'DECREMENTAR'
    // };
    //crea de forma automatica el incrementar action
    const accion =  new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }
  }
