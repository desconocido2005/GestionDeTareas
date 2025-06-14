package tareas.com.tareasPendientes.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tareas.com.tareasPendientes.Model.tareaModel;
import tareas.com.tareasPendientes.Service.serviceInterface;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/tareas")

public class tareaRest {

    private final serviceInterface service;

    @Autowired
    public tareaRest(serviceInterface service){
        this.service = service;
    }

    @GetMapping
    public List<tareaModel> findAll(){
        return service.findAll();
    }

    @GetMapping("/estado/{estado}")
    public List<tareaModel> findByEstado(@PathVariable String estado){
        return service.findByEstado(estado);
    }

    @PostMapping
    public tareaModel save(@RequestBody tareaModel tareas){
        return service.save(tareas);
    }
    @PutMapping("/update/{id}")
    public tareaModel update(@PathVariable Long id,@RequestBody tareaModel tareas){
        tareas.setId(id);
        return service.update(tareas);
    }
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.PATCH)
    public tareaModel delete(@PathVariable Long id){
        return service.delete(id);
    }
    @RequestMapping(value = "/restore/{id}", method = RequestMethod.PATCH)
    public tareaModel restore(@PathVariable Long id){
        return service.restore(id);
    }
}
