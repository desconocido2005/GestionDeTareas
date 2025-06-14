package tareas.com.tareasPendientes.Service;

import tareas.com.tareasPendientes.Model.tareaModel;

import java.util.List;
import java.util.Optional;

public interface serviceInterface {

    List<tareaModel> findAll();

    List<tareaModel> findByEstado(String estado);

    tareaModel save(tareaModel tareas);

    tareaModel update(tareaModel tareas);

    tareaModel delete(Long id);

    tareaModel restore(Long id);


}
