import { IAluno } from "./aluno";

export interface ITurma {
  _id: string;
  ano: number;
  periodo: number;
  disciplina: {
    _id: string;
    codigo: string;
    nome: string;
  };
  alunos: IAluno[];
}
