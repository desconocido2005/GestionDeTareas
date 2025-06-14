import { Tareas } from './../../../core/interface/tareas';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TareasService } from '../../../core/service/tareas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tareas-form',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './tareas-form.component.html',
  styleUrl: './tareas-form.component.scss'
})
export class TareasFormComponent implements OnInit {

  ngOnInit(): void {}


  prioridades: string[] = ['Alto', 'Medio', 'Bajo'];

  @Input() tareas: Tareas = {
    titulo: '',
    descripcion: '',
    prioridad: 'Medio'
  }

  constructor(private TareasService: TareasService){}

  @Output() save = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  isEditing: boolean = false;

  saveTarea(): void{
    if (!this.tareas.titulo?.trim() || !this.tareas.descripcion?.trim()) {
      alert('No se puede guardar un tarea sin titulo o descripcion');
      return;
    }

    if (this.isEditing && this.tareas.id) {
      this.TareasService.update(this.tareas).subscribe({
        next: () =>{
          alert('Se actualizo correctamente');
          this.update.emit();
          this.resetForm();

        },
        error: (err) =>{
          console.log("No se pudo actualizar la tarea" + err);
          alert('No se pudo actualizar la tarea');
        }
      });
      
    } else {
      this.TareasService.save(this.tareas).subscribe({
        next: () =>{
          alert('Se guardo correctamente');
          this.save.emit();
          this.resetForm();
        },
        error: (err) => {
          console.log("No se pudo guardar la tarea" + err);
          alert('No se pudo guardar la tarea');
        }
      });
    }
  }

  resetForm(): void {
    this.tareas ={
      titulo: '',
      descripcion: '',
      prioridad: 'Medio'
    }
    this.isEditing = false;
  }


  // prepara para la edicion

  setTareasEdit(t: Tareas): void {
    this.tareas = {...t};
    this.isEditing = true;
  }
  cancelForm(): void {    // Limpia el formulario si quieres
  this.cancel.emit();    // Notifica al componente padre para ocultarlo
}
}
