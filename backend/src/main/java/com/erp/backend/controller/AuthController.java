package com.erp.backend.controller;

import com.erp.backend.dto.JwtResponse;
import com.erp.backend.dto.LoginRequest;
import com.erp.backend.dto.RegistroRequest;
import com.erp.backend.dto.UsuarioDTO;
import com.erp.backend.model.Usuario;
import com.erp.backend.service.JwtService;
import com.erp.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<JwtResponse>> login(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtService.generateToken((UserDetails) authentication.getPrincipal());
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        UsuarioDTO usuario = usuarioService.findByUsername(userDetails.getUsername());

        JwtResponse response = new JwtResponse(
                jwt,
                usuario.getId(),
                usuario.getUsername(),
                usuario.getNombre(),
                usuario.getApellido(),
                usuario.getEmail()
        );

        return ResponseEntity.ok(ApiResponse.success("Login exitoso", response));
    }

    @PostMapping("/registro")
    public ResponseEntity<ApiResponse<UsuarioDTO>> registro(@Valid @RequestBody RegistroRequest registroRequest) {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setUsername(registroRequest.getUsername());
        usuarioDTO.setPassword(registroRequest.getPassword());
        usuarioDTO.setNombre(registroRequest.getNombre());
        usuarioDTO.setApellido(registroRequest.getApellido());
        usuarioDTO.setEmail(registroRequest.getEmail());

        UsuarioDTO createdUsuario = usuarioService.create(usuarioDTO);
        return ResponseEntity.ok(ApiResponse.success("Usuario registrado exitosamente", createdUsuario));
    }
} 