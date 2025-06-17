package com.erp.backend.repository;

import com.erp.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Optional<Producto> findByCodigo(String codigo);
    List<Producto> findByActivoTrue();
    List<Producto> findByStockActualLessThanEqual(Integer stockMinimo);
    boolean existsByCodigo(String codigo);
} 