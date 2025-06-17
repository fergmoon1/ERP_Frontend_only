package com.erp.backend.service;

import com.erp.backend.dto.ProductoDTO;
import com.erp.backend.model.Producto;
import com.erp.backend.repository.ProductoRepository;
import com.erp.backend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Transactional(readOnly = true)
    public List<ProductoDTO> findAll() {
        return productoRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProductoDTO> findActive() {
        return productoRepository.findByActivoTrue().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<ProductoDTO> findLowStock() {
        return productoRepository.findByStockActualLessThanEqual(0).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductoDTO findById(Long id) {
        return productoRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con id: " + id));
    }

    @Transactional(readOnly = true)
    public ProductoDTO findByCodigo(String codigo) {
        return productoRepository.findByCodigo(codigo)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con código: " + codigo));
    }

    @Transactional
    public ProductoDTO create(ProductoDTO productoDTO) {
        if (productoRepository.existsByCodigo(productoDTO.getCodigo())) {
            throw new IllegalArgumentException("Ya existe un producto con el código: " + productoDTO.getCodigo());
        }

        Producto producto = new Producto();
        producto.setCodigo(productoDTO.getCodigo());
        producto.setNombre(productoDTO.getNombre());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setPrecioVenta(productoDTO.getPrecioVenta());
        producto.setPrecioCompra(productoDTO.getPrecioCompra());
        producto.setStockActual(productoDTO.getStockActual());
        producto.setStockMinimo(productoDTO.getStockMinimo());
        producto.setActivo(true);

        return convertToDTO(productoRepository.save(producto));
    }

    @Transactional
    public ProductoDTO update(Long id, ProductoDTO productoDTO) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con id: " + id));

        producto.setNombre(productoDTO.getNombre());
        producto.setDescripcion(productoDTO.getDescripcion());
        producto.setPrecioVenta(productoDTO.getPrecioVenta());
        producto.setPrecioCompra(productoDTO.getPrecioCompra());
        producto.setStockActual(productoDTO.getStockActual());
        producto.setStockMinimo(productoDTO.getStockMinimo());
        producto.setActivo(productoDTO.isActivo());

        return convertToDTO(productoRepository.save(producto));
    }

    @Transactional
    public void delete(Long id) {
        if (!productoRepository.existsById(id)) {
            throw new ResourceNotFoundException("Producto no encontrado con id: " + id);
        }
        productoRepository.deleteById(id);
    }

    @Transactional
    public ProductoDTO updateStock(Long id, Integer cantidad) {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Producto no encontrado con id: " + id));

        producto.setStockActual(producto.getStockActual() + cantidad);
        return convertToDTO(productoRepository.save(producto));
    }

    private ProductoDTO convertToDTO(Producto producto) {
        ProductoDTO dto = new ProductoDTO();
        dto.setId(producto.getId());
        dto.setCodigo(producto.getCodigo());
        dto.setNombre(producto.getNombre());
        dto.setDescripcion(producto.getDescripcion());
        dto.setPrecioVenta(producto.getPrecioVenta());
        dto.setPrecioCompra(producto.getPrecioCompra());
        dto.setStockActual(producto.getStockActual());
        dto.setStockMinimo(producto.getStockMinimo());
        dto.setFechaCreacion(producto.getFechaCreacion());
        dto.setUltimaActualizacion(producto.getUltimaActualizacion());
        dto.setActivo(producto.isActivo());
        return dto;
    }
} 