import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListaTurmasComponent } from "./components/lista-turmas/lista-turmas.component";
import { TurmaComponent } from "./components/turma/turma.component";
import { TurmaService } from './services/turma.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ListaTurmasComponent,
    TurmaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public turmaService = inject(TurmaService);
}
