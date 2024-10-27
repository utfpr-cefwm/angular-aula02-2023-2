import { Component, Input } from '@angular/core';
import { Turma } from '../../models/turma';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turma',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})
export class TurmaComponent {

  @Input({
    required: true,
  })
  public turma!: Turma;

}
