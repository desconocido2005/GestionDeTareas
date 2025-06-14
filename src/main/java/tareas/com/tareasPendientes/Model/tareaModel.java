package tareas.com.tareasPendientes.Model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "tareaas")

public class tareaModel {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "estado")
    private String estado = "Pendiente";

    @Column(name = "prioridad")
    private String prioridad;
}
