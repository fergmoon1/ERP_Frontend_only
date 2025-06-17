package com.erp.backend.controller;

import com.erp.backend.dto.UsuarioDTO;
import com.erp.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<UsuarioDTO>>> getAllUsuarios() {
        List<UsuarioDTO> usuarios = usuarioService.findAll();
        return ResponseEntity.ok(ApiResponse.success(usuarios));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UsuarioDTO>> getUsuarioById(@PathVariable Long id) {
        UsuarioDTO usuario = usuarioService.findById(id);
        return ResponseEntity.ok(ApiResponse.success(usuario));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<UsuarioDTO>> createUsuario(@Valid @RequestBody UsuarioDTO usuarioDTO) {
        UsuarioDTO createdUsuario = usuarioService.create(usuarioDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.success("Usuario creado exitosamente", createdUsuario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UsuarioDTO>> updateUsuario(
            @PathVariable Long id,
            @Valid @RequestBody UsuarioDTO usuarioDTO) {
        UsuarioDTO updatedUsuario = usuarioService.update(id, usuarioDTO);
        return ResponseEntity.ok(ApiResponse.success("Usuario actualizado exitosamente", updatedUsuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUsuario(@PathVariable Long id) {
        usuarioService.delete(id);
        return ResponseEntity.ok(ApiResponse.success("Usuario eliminado exitosamente", null));
    }

    @PutMapping("/{id}/ultimo-acceso")
    public ResponseEntity<ApiResponse<Void>> updateLastAccess(@PathVariable Long id) {
        usuarioService.updateLastAccess(id);
        return ResponseEntity.ok(ApiResponse.success("Último acceso actualizado", null));
    }
} 