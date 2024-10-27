import { inject, Injectable } from '@angular/core';

import { map, ReplaySubject } from 'rxjs';

import { Turma } from '../models/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno } from '../models/aluno';
import { ITurma } from '../interfaces/turma';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private httpClient = inject(HttpClient);

  private _turmas$ = new ReplaySubject<Turma[]>(1);
  public turmas$ = this._turmas$.asObservable();

  private _turmaSelecionada$ = new ReplaySubject<Turma>(1);
  public turmaSelecionada$ = this._turmaSelecionada$.asObservable();

  constructor(
  ) {
    this.httpClient.get<ITurma[]>('http://localhost:3000/api/turmas').pipe(
      map(turmas => turmas.map(t => new Turma(
        new Disciplina(t.disciplina.codigo, t.disciplina.nome),
        t.ano,
        t.periodo,
        t.alunos.map(a => new Aluno(
          a.codigo,
          a.nome,
        )),
      ))),
    ).subscribe(this._turmas$);
  }

  public selecionaTurma(t: Turma): void {
    this._turmaSelecionada$.next(t);
  }

}
