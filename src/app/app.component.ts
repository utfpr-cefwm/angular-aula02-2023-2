import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListaTurmasComponent } from "./components/lista-turmas/lista-turmas.component";
import { TurmaComponent } from "./components/turma/turma.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaTurmasComponent,
    TurmaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
