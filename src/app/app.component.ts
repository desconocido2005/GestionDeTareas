import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasListComponent } from './feature/tareas/tareas-list/tareas-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TareasListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tareasPendientes';
}
