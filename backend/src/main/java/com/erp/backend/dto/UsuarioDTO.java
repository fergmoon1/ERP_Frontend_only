package com.erp.backend.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class UsuarioDTO {
    private Long id;
    private String username;
    private String nombre;
    private String apellido;
    private String email;
    private LocalDateTime fechaCreacion;
    private LocalDateTime ultimoAcceso;
    private boolean activo;
} 