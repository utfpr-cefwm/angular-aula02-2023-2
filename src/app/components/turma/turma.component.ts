import { Component, Input } from '@angular/core';
import { Turma } from '../../models/turma';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

  @Input({
    required: true,
  })
  public turma!: Turma;

}
