package com.erp.backend.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class ProductoDTO {
    private Long id;
    private String codigo;
    private String nombre;
    private String descripcion;
    private BigDecimal precioVenta;
    private BigDecimal precioCompra;
    private Integer stockActual;
    private Integer stockMinimo;
    private LocalDateTime fechaCreacion;
    private LocalDateTime ultimaActualizacion;
    private boolean activo;
} 