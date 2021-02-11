import { Component, OnInit} from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ResetearAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  
  contador:number; 


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(contador);
    })
  }

  reset(){
    const accion = new ResetearAction;
    this.store.dispatch( accion );
    /* this.contador = 0;
    this.contadorCambio.emit(0); */
  }

}
