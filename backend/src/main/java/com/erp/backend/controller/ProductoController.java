package com.erp.backend.controller;

import com.erp.backend.dto.ProductoDTO;
import com.erp.backend.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductoDTO>>> getAllProductos() {
        List<ProductoDTO> productos = productoService.findAll();
        return ResponseEntity.ok(ApiResponse.success(productos));
    }

    @GetMapping("/activos")
    public ResponseEntity<ApiResponse<List<ProductoDTO>>> getProductosActivos() {
        List<ProductoDTO> productos = productoService.findActive();
        return ResponseEntity.ok(ApiResponse.success(productos));
    }

    @GetMapping("/bajo-stock")
    public ResponseEntity<ApiResponse<List<ProductoDTO>>> getProductosBajoStock() {
        List<ProductoDTO> productos = productoService.findLowStock();
        return ResponseEntity.ok(ApiResponse.success(productos));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductoDTO>> getProductoById(@PathVariable Long id) {
        ProductoDTO producto = productoService.findById(id);
        return ResponseEntity.ok(ApiResponse.success(producto));
    }

    @GetMapping("/codigo/{codigo}")
    public ResponseEntity<ApiResponse<ProductoDTO>> getProductoByCodigo(@PathVariable String codigo) {
        ProductoDTO producto = productoService.findByCodigo(codigo);
        return ResponseEntity.ok(ApiResponse.success(producto));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ProductoDTO>> createProducto(@Valid @RequestBody ProductoDTO productoDTO) {
        ProductoDTO createdProducto = productoService.create(productoDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.success("Producto creado exitosamente", createdProducto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductoDTO>> updateProducto(
            @PathVariable Long id,
            @Valid @RequestBody ProductoDTO productoDTO) {
        ProductoDTO updatedProducto = productoService.update(id, productoDTO);
        return ResponseEntity.ok(ApiResponse.success("Producto actualizado exitosamente", updatedProducto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteProducto(@PathVariable Long id) {
        productoService.delete(id);
        return ResponseEntity.ok(ApiResponse.success("Producto eliminado exitosamente", null));
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<ApiResponse<ProductoDTO>> updateStock(
            @PathVariable Long id,
            @RequestParam Integer cantidad) {
        ProductoDTO updatedProducto = productoService.updateStock(id, cantidad);
        return ResponseEntity.ok(ApiResponse.success("Stock actualizado exitosamente", updatedProducto));
    }
} 