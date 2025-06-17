package com.erp.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String nombre;
    private String apellido;
    private String email;

    public JwtResponse(String token, Long id, String username, String nombre, String apellido, String email) {
        this.token = token;
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
} 