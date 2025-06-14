package tareas.com.tareasPendientes.Repository;

import jdk.dynalink.linker.LinkerServices;
import org.springframework.data.jpa.repository.JpaRepository;
import tareas.com.tareasPendientes.Model.tareaModel;

import java.util.List;

public interface tareaRepository extends JpaRepository<tareaModel, Long> {
    List<tareaModel> findByEstado(String estado);
}
