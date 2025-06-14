import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tareas } from '../interface/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private url = `${environment.apiurl}`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tareas[]>{
    return this.http.get<Tareas[]>(this.url);
  }

  findByEstado(estado:string): Observable<Tareas[]>{
    return this.http.get<Tareas[]>(`${this.url}/estado/${estado}`);
  }

  save(tarea:Tareas): Observable<Tareas>{
    return this.http.post<Tareas>(this.url, tarea);
  }

  update(tarea:Tareas): Observable<Tareas>{
    return this.http.put<Tareas>(`${this.url}/update/${tarea.id}`, tarea);
  }

  delete(id:number): Observable<Tareas>{
    return this.http.patch<Tareas>(`${this.url}/delete/${id}`, `` );
  }

  restore(id:number) : Observable<Tareas>{
    return this.http.patch<Tareas>(`${this.url}/restore/${id}`, ``);
  }
}
