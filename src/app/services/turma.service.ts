import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { Turma } from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno } from '../models/aluno';

const TURMAS = [
  {
    "_id": "613be41ddb9c47fb90d20d98",
    "ano": 2020,
    "periodo": 1,
    "disciplina": {
      "_id": "613be41ddb9c47fb90d20d8e",
      "codigo": "WEB03",
      "nome": "Angular",
    },
    "alunos": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 111,
        "nome": "João Francisco Neto"
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 333,
        "nome": "Jaqueline dos Santos"
      },
      {
        "_id": "613be41ddb9c47fb90d20d93",
        "codigo": 444,
        "nome": "Enzo Andrade"
      },
    ],
  },
  {
    "_id": "613be41ddb9c47fb90d20d99",
    "ano": 2021,
    "periodo": 2,
    "disciplina": {
      "_id": "613be41ddb9c47fb90d20d8f",
      "codigo": "WEB11",
      "nome": "Git",
    },
    "alunos": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 111,
        "nome": "João Francisco Neto"
      },
      {
        "_id": "613be41ddb9c47fb90d20d91",
        "codigo": 222,
        "nome": "João Alberto das Couves"
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private _turmas$ = new ReplaySubject<Turma[]>(1);
  public turmas$ = this._turmas$.asObservable();

  private _turmaSelecionada$ = new ReplaySubject<Turma>(1);
  public turmaSelecionada$ = this._turmaSelecionada$.asObservable();

  constructor(
  ) {
    this._turmas$.next(
      TURMAS.map(t => new Turma(
        new Disciplina(t.disciplina.codigo, t.disciplina.nome),
        t.ano,
        t.periodo,
        t.alunos.map(a => new Aluno(
          a.codigo,
          a.nome,
        )),
      )),
    );
  }

  public selecionaTurma(t: Turma): void {
    this._turmaSelecionada$.next(t);
  }

}
