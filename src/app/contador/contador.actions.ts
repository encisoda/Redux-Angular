import { Action } from "@ngrx/store";


//dentro de [] identificar que accion se va a hacer
export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESETEAR = '[Contador] Resetear';

//voy a crear una clase que implementa la interface action
export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
    readonly type = MULTIPLICAR;

    constructor( public payload: number ) {}
}

export class DividirAction implements Action{
    readonly type = DIVIDIR;

    constructor( public payload: number ) {}
}

export class ResetearAction implements Action{
    readonly type = RESETEAR;

}

export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetearAction ;