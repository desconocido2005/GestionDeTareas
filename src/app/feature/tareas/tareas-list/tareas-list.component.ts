import { Tareas } from './../../../core/interface/tareas';
import { TareasService } from './../../../core/service/tareas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasFormComponent } from '../tareas-form/tareas-form.component';

@Component({
  selector: 'app-tareas-list',
  standalone: true,
  imports: [CommonModule, TareasFormComponent],
  templateUrl: './tareas-list.component.html',
  styleUrl: './tareas-list.component.scss'
})
export class TareasListComponent implements OnInit {

  tarea: Tareas[] = [];


  // para abrir el formulario
  showForm = false;

  constructor(private TareasService: TareasService) { }


  @ViewChild(TareasFormComponent) formComponent!: TareasFormComponent;

  ngOnInit(): void {
    this.getAllTareas();
  }

  getAllTareas(): void {
    this.TareasService.findAll().subscribe({
      next: (tarea) => {
        this.tarea = tarea
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
    openCreateForm(): void {
    this.showForm = true;
      setTimeout(() => {
    this.formComponent?.resetForm(); // con ? por si aún no se renderiza
  }, 0);
  }


  edit(tareas: Tareas): void {
    this.showForm = true;
      // Esperamos a que el componente se renderice
  setTimeout(() => {
    this.formComponent.setTareasEdit(tareas);
  }, 0);
  this.formComponent.setTareasEdit(tareas);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  markAsCompleted(tarea: Tareas): void {
    const updatedTarea = { ...tarea, estado: 'Completado' };
    this.TareasService.update(updatedTarea).subscribe({
      next: () => {
        alert(`Tarea "${tarea.titulo}" marcada como Completada.`);
        this.getAllTareas();  // refrescar lista
      },
      error: (err) => {
        console.error('Error al actualizar tarea:', err);
        alert('No se pudo marcar como Completada');
      }
    });
  }

  markAsPending(tarea: Tareas): void {
    const updatedTarea = { ...tarea, estado: 'Pendiente' };
    this.TareasService.update(updatedTarea).subscribe({
      next: () => {
        alert(`Tarea "${tarea.titulo}" marcada como Pendiente.`);
        this.getAllTareas();  // refrescar lista
      },
      error: (err) => {
        console.error('Error al actualizar tarea:', err);
        alert('No se pudo marcar como Pendiente');
      }
    });
  }
onCancel(): void {
  this.showForm = false;
}



}
