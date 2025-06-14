package tareas.com.tareasPendientes.Service.Impl;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tareas.com.tareasPendientes.Model.tareaModel;
import tareas.com.tareasPendientes.Repository.tareaRepository;
import tareas.com.tareasPendientes.Service.serviceInterface;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class serviceInterfaceImpl implements serviceInterface {

    private tareaRepository repository;

    @Autowired
    public serviceInterfaceImpl(tareaRepository repository){
        this.repository = repository;
    }

    @Override
    public List<tareaModel> findAll(){
        log.info("Listado de tareas");
        return repository.findAll();
    }

    @Override
    public List<tareaModel> findByEstado(String estado){
        log.info("Buscando tarea por estado");
        return repository.findByEstado(estado);
    }
    @Override
    public tareaModel save(tareaModel tareas){
        log.info("Tarea Guardada");
        return repository.save(tareas);
    }

    @Override
    public tareaModel update(tareaModel tareas) {
        log.info("Actualizando tarea con ID: {}", tareas.getId());

        tareaModel existente = repository.findById(tareas.getId())
                .orElseThrow(() -> new RuntimeException("No existe tarea con el ID: " + tareas.getId()));

        // Actualizar solo los campos que deseas permitir
        existente.setTitulo(tareas.getTitulo());
        existente.setDescripcion(tareas.getDescripcion());
        existente.setPrioridad(tareas.getPrioridad());
        existente.setEstado(tareas.getEstado()); // solo si quieres permitir actualizar el estado

        return repository.save(existente);
    }

    @Override
    public tareaModel delete(Long id){
        log.info("Buscando tarea" + id);
        tareaModel tarea = repository.findById(id).orElseThrow( ()->  new RuntimeException("No existe tarea con el id "+id) );
        tarea.setEstado("Completado");
        return repository.save(tarea);
    }

    @Override
    public tareaModel restore(Long id){
        log.info("Buscando tarea" + id);
        tareaModel tarea = repository.findById(id).orElseThrow(() -> new RuntimeException("No existe tarea con el id "+id) );
        tarea.setEstado("Pendiente");
        return repository.save(tarea);
    }

}
