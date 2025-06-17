import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import usuarioService from '../services/usuario.service';

interface Usuario {
    id: number;
    username: string;
    email: string;
    nombre: string;
    apellido: string;
    roles: string[];
}

const Usuarios: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [open, setOpen] = useState(false);
    const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        nombre: '',
        apellido: '',
        password: '',
        roles: [] as string[],
    });

    const loadUsuarios = async () => {
        try {
            const data = await usuarioService.getAll();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
        }
    };

    useEffect(() => {
        loadUsuarios();
    }, []);

    const handleOpen = (usuario?: Usuario) => {
        if (usuario) {
            setEditingUsuario(usuario);
            setFormData({
                username: usuario.username,
                email: usuario.email,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                password: '',
                roles: usuario.roles,
            });
        } else {
            setEditingUsuario(null);
            setFormData({
                username: '',
                email: '',
                nombre: '',
                apellido: '',
                password: '',
                roles: [],
            });
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingUsuario(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingUsuario) {
                await usuarioService.update(editingUsuario.id, formData);
            } else {
                await usuarioService.create(formData);
            }

            handleClose();
            loadUsuarios();
        } catch (error) {
            console.error('Error al guardar usuario:', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('¿Está seguro de eliminar este usuario?')) {
            try {
                await usuarioService.delete(id);
                loadUsuarios();
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
            }
        }
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" component="h1">
                    Usuarios
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpen()}
                >
                    Nuevo Usuario
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Roles</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.map((usuario) => (
                            <TableRow key={usuario.id}>
                                <TableCell>{usuario.username}</TableCell>
                                <TableCell>{usuario.email}</TableCell>
                                <TableCell>{usuario.nombre}</TableCell>
                                <TableCell>{usuario.apellido}</TableCell>
                                <TableCell>{usuario.roles.join(', ')}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpen(usuario)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(usuario.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {editingUsuario ? 'Editar Usuario' : 'Nuevo Usuario'}
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Usuario"
                            fullWidth
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({ ...formData, username: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Nombre"
                            fullWidth
                            value={formData.nombre}
                            onChange={(e) =>
                                setFormData({ ...formData, nombre: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Apellido"
                            fullWidth
                            value={formData.apellido}
                            onChange={(e) =>
                                setFormData({ ...formData, apellido: e.target.value })
                            }
                            required
                        />
                        {!editingUsuario && (
                            <TextField
                                margin="dense"
                                label="Contraseña"
                                type="password"
                                fullWidth
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                                required
                            />
                        )}
                        <FormControl fullWidth margin="dense">
                            <InputLabel>Roles</InputLabel>
                            <Select
                                multiple
                                value={formData.roles}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        roles: e.target.value as string[],
                                    })
                                }
                            >
                                <MenuItem value="ROLE_USER">Usuario</MenuItem>
                                <MenuItem value="ROLE_ADMIN">Administrador</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type="submit" variant="contained">
                            {editingUsuario ? 'Actualizar' : 'Crear'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
};

export default Usuarios; 